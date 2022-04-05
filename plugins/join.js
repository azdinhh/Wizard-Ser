const { getBinaryNodeChild } = require("@adiwajshing/baileys");

module.exports = {
    name: "join",
    category: "misc",
    desc: "Join to group using invite url.",
    async exec(msg, sock, args) {
        // search for invite url
        const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
        const queryInvite = async (code) => {
            const results = await sock.query({
                tag: "iq",
                attrs: {
                    type: "get",
                    xmlns: "w:g2",
                    to: "@g.us"
                }, content: [{ tag: "invite", attrs: { code } }]
            })
            const group = getBinaryNodeChild(results, "group");
            return group.attrs;
        };

        let code = args.join(" ").match(rex1);
        if (code === null) return await msg.reply("لم يتم الكشف عن عنوان url للدعوة.");
        code = code[0].replace("chat.whatsapp.com/", "");
        // check invite code
        const check = await queryInvite(code).catch(async () => {
            await msg.reply("عنوان url للدعوة غير صالح.");
        })
        // 
        if (check.size >= 257) return await msg.reply("المجموعة كاملة");
        if (check.size < 30) return await msg.reply("يجب أن يكون الحد الأدنى المطلوب لأعضاء المجموعة أكثر من 30 شخصًا.");
        // Trying to join group with given invite code
        await sock.groupAcceptInvite(code).catch(async () => {
            await msg.reply("يبدو أن المجموعة ممتلئة بالفعل أو أصبحت غير صالحة عندما أحاول الانضمام :/");
        });
        await msg.reply("نجاح الانضمام إلى مجموعتك.");
    }
}
