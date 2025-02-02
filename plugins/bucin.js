let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, watermark, 'Quotes', `${usedPrefix + command}`)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
  اخترت أن أكون وحدي ، ليس لأنني أنتظر الشخص المثالي ، ولكني بحاجة إلى شخص لا يستسلم أبدًا. "،
   "شخص واحد مخلوق مع شريك لم يعثر عليه بعد." ،
   "الفردي. ربما تكون طريقة الله في قول" استرح من الحب الخطأ "." ،
   "العزاب هم الشباب الذين يعطيون الأولوية لتطورهم الشخصي من أجل الحب الراقي لاحقًا." ،
   "أنا لا أبحث عن شخص مثالي ، لكني أبحث عن شخص يصبح مثاليًا بفضل نقاط قوتي." ،
   "أصدقاء الناس هم رفقاء الروح المعلقة." ،
   "يجب أن يمر العزاب. كل شيء له وقت ، عندما تصبح كل الوحدة تجمعًا مع عاشق حلال. تحلى بالصبر."،
   "روميو كان على استعداد للموت من أجل جولييت ، مات جاك لأنه أنقذ روز. النقطة المهمة هي ، إذا كنت تريد أن تعيش ، كن أعزب." ،
   "أنا أبحث عن أشخاص ليس من قوتهم ولكن أبحث عن الناس من صدقهم." ،
   "الزملاء ليسوا متخبطين ، وغالبًا ما يتم الخلط بينهم. لذا استمروا في النضال المناسب."،
   "إذا أصبحت أوتار الجيتار ، فأنا لا أريد أن أكون عازف الجيتار. لأنني لا أريد التخلص منك." ،
   "إذا كان حبك هو وهم ، إذن دعني أتخيل إلى الأبد." ،
   "حبيبي .. وظيفتي هي أن أحبك فقط ، لا أن أحارب القدر" ،
   "عندما أكون معك ، أشعر أن ساعة واحدة هي ثانية واحدة فقط ، ولكن عندما أكون بعيدًا عنك ، أشعر وكأن يومًا واحدًا يصبح عامًا واحدًا." ،
   "كولاك الموز يعرف سوميدانج ، على الرغم من أن المسافة تمتد حبي لن يختفي أبدًا."،
   "أريد أن أكون الوحيد وليس الوحيد." ،
   "لا أستطيع أن أعدك بأن أكون جيدًا. لكنني أعدك أن أكون دائمًا بجانبك." ،
   "إذا أصبحت ممثلاً للناس فسأفشل بالتأكيد ، كيف يمكنني التفكير في الناس إذا كان الشيء الوحيد الذي يدور في ذهني هو أنت." ،
   "انظر إلى حديقتي المليئة بالورود. انظر إلى عينيك ، قلبي يتفتح" ،
   "أوعد أن أكون معي الآن وغدًا وإلى الأبد." ،
   "لا ينشأ الضياع فقط بسبب المسافة المتباعدة ولكن أيضًا بسبب الأمنيات التي لا تتحقق" ،
   "لن تكون بعيدًا عني أبدًا ، أينما ذهبت ، فأنت دائمًا هناك ، لأنك دائمًا في قلبي ، وما هو بعيد هو أجسادنا فقط ، وليس قلوبنا." ،
   "أعلم في كل نظرة أن المسافة والوقت يعيقنا. لكنني أعتقد أننا سنكون متحدين بالتأكيد لاحقًا" ،
   "اشتياقك دون لقاء مطلقًا يشبه إنشاء أغنية لم يتم غنائها مطلقًا." ،
   "هناك أوقات تكون فيها المسافة دائمًا حاجزًا بيني وبينك ، لكن ما زلنا في قلبي قريبون دائمًا." ،
   "إذا كان هذا القلب لا يقدر على وقف كل الشوق ، فماذا أفعل إلا أن أصلي من أجلك".
   "ربما في هذه اللحظة لا يسعني سوى كبح هذا الشوق. حتى يحين الوقت الذي يمكنني أن ألتقي فيه وأطلق هذا الشوق معك." ،
   "من خلال الشوق المضطرب في قلبي ، هناك أحيانًا أحتاج حقًا إلى عناقك المحب." ،
   "في الليل البارد ، لم أعد أتذكر ؛ كم مرة أفكر في أنك تشتاق إليك أيضًا." ،
   "أفتقدك مثل المطر الذي يأتي فجأة ويستمر لفترة طويلة. وحتى بعد توقف المطر ، ما زلت أفتقدك." ،
   "منذ التعرف عليك ، أريد أن أستمر في التعلم ، وأن أتعلم أن أكون الأفضل لك." ،
   "هل تعرف الفرق بين قلم الرصاص ووجهك؟ إذا كان بإمكانك محو قلم الكتابة ، ولكن إذا كان وجهك فلن يتمكن أي شيء من محوه من ذهني." ،
   "لا داعي للقلق بشأن الامتحان الوطني غدًا ، ولكن اختبار الحياة الذي مررت به بعد أن تركتني." ،
   "شيء واحد عن السعادة في المدرسة يجعلني متحمسًا هو القدرة على رؤية ابتسامتك كل يوم." ،
   "هل تعرف الفرق بين الذهاب إلى المدرسة والذهاب إلى منزلك؟ إذا ذهبت إلى المدرسة ، يجب عليك إحضار الكتب والأقلام ، ولكن إذا ذهبت إلى منزلك ، فأنا أحضر قلبي وحبي فقط." ،
   "لست حزينًا إذا كان غدًا يوم الاثنين ، فأنا حزين إذا لم ألتقي بك." ،
   "لحظة حبي متعامدة مع لحظة حبك. اجعل حبنا نقطة توازن مثالية." ،
   "أنا على استعداد للمشاركة في سباق جري حول العالم ، طالما أنك خط النهاية." ،
   "واجبي المنزلي هو أن أفتقدك. أقوى من الرياضيات ، وأوسع من الفيزياء ، وأقوى من علم الأحياء."،
   "حبي لك مثل التمثيل الغذائي الذي لن يتوقف حتى الموت." ،
   "إذا كان jelangkung مثلك ، تعال واصطحبني ، سآخذك إلى المنزل." ،
   "تناول ما يعجبني طالما أنه معك ، بما في ذلك أكل الكبد." ،
   "الحب مثل حكم الإعدام. إذا لم يتم إطلاق النار عليك ، تعلقه." ،
   "حبك مثل المخدرات: بمجرد أن تحاول أن تصبح مدمنًا ، لا تحاول أن تجعل نفسك فضوليًا ، اترك الأمر لتجعلك مدمنًا." ،
   "أحب تناول الوجبات الخفيفة كثيرًا لأن الوجبات الخفيفة لذيذة. علاوة على ذلك ، تناولك تمامًا ..." ،
   "هذا العالم ملك لنا نحن الاثنين فقط. كل شيء آخر هو مجرد عقد."،
   "بالنسبة لي ، كل تلك الأيام هي ثلاثاء. الثلاثاء في الجنة عندما تكون قريبًا منك ..." ،
   "ماذا لو أصبح كلانا عصابة من المجرمين؟ لقد سرقت قلبك وسرقت قلبي." ،
   "أنت مثل القهوة التي شربتها هذا الصباح. مريرة ، ولكن تسبب الإدمان." ، "غالبًا ما أشعر بالغيرة من أحمر الشفاه الخاص بك. يمكنه تقبيلك كل يوم ، من الصباح إلى المساء." ،
   "مجرد سماع اسمك يمكن أن يجعلني أبتسم مثل الأحمق." ،
   "أعلم أن صديقتك ليست الوحيدة ، ومثلك ليس أنا فقط." ،
   "منذ أن توقفت عن التمني لك ، أصبحت غير متحمس في كل شيء .." ،
   "معك ، الوقوع في الحب هو أكثر حسرة متعمدة." ،
   "من الصعب جدًا أن أشعر بسعادة الحياة بدونك بجانبي." ،
   "من خلال الشوق المضطرب في قلبي ، هناك أحيانًا أحتاج حقًا إلى عناقك المحب." ،
   "إذا كنت تعلم ، ما زلت أحبك حتى الآن." ،
   "أحيانًا أشعر بالغيرة من الطائرات الورقية ... الخيوط تنكسر ، ما زالت تتم ملاحقتها ولا أريد أن يستولي عليها الآخرون ..." ،
   "لم أكن أعرف ما هو الحب ، حتى التقيت بك أخيرًا. لكن في تلك اللحظة عرفت كيف شعرت بالحزن." ،
   "المطاردة متعبة ، ولكن الانتظار أكثر إرهاقًا \ n في انتظار ملاحظة وجودي ..." ،
   "لا تتوقف عن الحب لمجرد أنك تعرضت للأذى. لأنه لا يوجد قوس قزح بدون مطر ، لا يوجد حب حقيقي بدون دموع." ،
   "لدي مليون سبب لنساك ، لكن لا شيء يمكن أن يجبرني على التوقف عن حبك." ،
   "في بعض الأحيان يشعر المرء بالغباء الشديد لمجرد حب شخص ما." ،
   "أنت أفضل حسرة لم أندم على الإطلاق".
   "لا يعني الأمر أن الأمر لا يستحق الانتظار ، إنه فقط أنه يعطي أملًا زائفًا في كثير من الأحيان." ،
   "جزء مني يؤلمني ، أتذكرها قريبة جدًا ، لكنها لا يمكن المساس بها." ،
   "أفضل شيء في حب شخص ما هو الدعاء من أجله سراً" ،
   "أتمنى أن أتخلص من هذا الشعور بمجرد أن أفقدك." ،
   "من أجل الحب نخدع أنفسنا. محاولة أن نكون أقوياء يتضح أنها عار." ،
   "اعتبرني بيتك ، إذا ذهبت تعرف إلى أين تذهب إلى المنزل. ابق إذا أردت وغادر إذا كنت تشعر بالملل ..." ،
   "أنا في حيرة من أملي ، هل يجب أن أصاب بخيبة أمل أم لا؟ إذا كنت محبطًا ، فمن أنا بالنسبة له؟ \ n \ n إذا لم أشعر بخيبة أمل ، لكنني أنتظر كلماته." ،
   "شوقي مثل الغصن الذي يبقى قائمًا. على الرغم من عدم وجود أوراق أخرى لمرافقته ، حتى يجف في النهاية ويتكسر ويموت." ،
   "أعتقد أننا مجرد شخصين غريبين لدينا الآن نفس الذكريات." ،
   "اجعلني أكرهك حتى لو كان ذلك لبضع دقائق فقط ، لذلك ليس من الصعب أن أنساك." ،
   "أحبك من كل قلبي ، لكنك تشارك مشاعرك مع الآخرين." ،
   "حبك قد يحطمني ، لكن تركك بطريقة ما لا يصلحني." ،
   "أنت أولاً وقبل كل شيء في حياتي. لكنني ثاني منك." ،
   "إذا كان بإمكاننا أن نلتقي في حلم فقط ، فأنا أريد أن أنام إلى الأبد." ،
   "سعادتي هي رؤيتك سعيدة ، على الرغم من سعادتك بدوني." ،
   "أحيانًا أحسد شيئًا ما. ليس له طعم ولكن هناك حاجة دائمًا إليه. بعكس الذي لديه ذوق ، ولكن يتم التخلي عنه وتجاهله ..." ،
   "كيف يمكنني أن أتحرك فقط إذا توقف قلبي أنت؟" ،
   "ذكرياتك مثل الوطن بالنسبة لي. لذلك في كل مرة يشرد فيها ذهني ، سيعود إليك دائمًا." ،
   "لماذا الأنسجة مفيدة؟ لأن الحب لا يجف أبدا. - سوجيو تيجو" ،
   "إذا كان حبك خطأ ، حسنًا ، دعني أظل مخطئًا." ،
   "منذ أن قابلتك ، أريد أن أستمر في التعلم. تعلم أن تكون الأفضل لك." ،
   "بعض الناس يتصرفون بغباء لمجرد رؤيتك تبتسم. وهو سعيد بذلك." ،
   "أنا لست شخصًا جيدًا ، لكني سأتعلم أن أكون الأفضل لك." ،
   "نحن لا نموت ، لكن الجروح هي التي تجعلنا غير قادرين على المشي كما اعتدنا".
   "إن وجودك مثل فنجان القهوة الذي أحتاجه كل صباح ، والذي يمكن أن يشجعني على أن أبقى متحمسًا لليوم." ،
   "أريد حقًا أن أعطي العالم لك. ولكن بما أن هذا غير ممكن ، فسأقدم لك أهم شيء في حياتي ، وهو عالمي." ،
   "من الأفضل أن تغني بروح الدعابة ولكن بلطف ، بدلاً من التظاهر بالرومانسية مع نهاية مأساوية."،
   "بن لا ينتهي بخيبة أمل ، عليك أن تعرف متى تأمل ومتى تتوقف." ،
   "أنا ، كي وونغ جوو ، لا أفهم معنى أنا أحب يو" ،
   "لست بحاجة إلى ayu و sugih ، أنا متأكد من أننا سعداء ومجنون." ،
   "حطمت الكاميرا حبي لطاقمك ، والتركيز على طاقمك لا يزال ضبابيًا."،
   "Saben dino kegowo أحلام ولكن لا يمكن أن تكون غبية." ،
   "لا تقابل 30 دينار ، أشعر وكأنني شهر." ،
   "أنا بدونك مثل القط الذي فقد مطاطه. أمبيار." ،
   "أريدها ، أنا ألعب الألعاب في كل مرة. Supoyo أنا iso nemokne kowe lewih hot. Ben Lewih dowo when I'm kanggo urip with your slira."،
   "لم أكن أعرف أبدًا ما هو opo kui tresno ، لقد التقيت للتو بفضل سليرا الخاصة بك." ،
   "Love aa ka neng moal leungit-leungit sanajan aa geus marry deui." ،
   "صبرك محدود ، لكن حبك هو ka anjeun henteu" ، "Kanyaah ، لقد سئمت من تلاشي أكل Bayclean." ،
   "ذكريات Endah keur babarengan jeung anjeun ek tuluy في الذاكرة ، nepi ka poho." ،
   "سوف تتنفس دائمًا بمفردك ، وستحتاج إلى راحة sejen jalmi." ،
   "Nyaahna aa ، تحتاج الشاي إذا كان كاتب البنك لا يزال يقوم بتحصيل الديون (هايو مومونتيل)." ،
   "صبر أورانج هو الحد الأقصى ، لكن حبك للأورانج جيد لك." ،
   "أعتقد أن Hayang أشتم كلمات الحب مثل هذه في هذا العالم ، ثم أقوم بمعالجة kumpulkeun ، بحيث يكون Anjeun nyaho كبيرًا جدًا ، والحب لك منخفض ، Ka Anjeun." ،
   "اهدأ واي نينغ ، أغنية آري لأخو الحب ماه سابيرتوس كرسباتيه ؛ خالدة." ،
   "عبدي سانز جالمي نو سامبورنا بايكون أنجيون ، سارينج سانز أوغي نو هو أفضل كانج جو أنجيون." ،
   "يكفي أن تفقد الشبكة فقط ، فأنت لا تفعل ذلك." ،
   "غالبًا ما أجعلني أتناول الكبد. لكن إدراك أنك ما زلت هنا يجعلني سعيدًا مرة أخرى." ،
   "أعدائي هم أولئك الذين يريدون أن يكون لك أيضًا." ،
   "هناك الكثير دائمًا ، ولكن إذا كنت الشخص الوحيد الذي أريده ، فماذا بعد؟" ،
   "ساعات نومي يفسدها الشوق" ،
   "يكفي أن الصين بعيدة ، لا تحبونا" ،
   "المهم هو سعادتك ، أنا غير مهم .." ،
   "أمنيتي الوحيدة هي أن تحبك ..." ،
   "أنا بدونك مثل سيارة إسعاف بدون wiuw wiuw wiuw." ،
   "يكفي أن القارة القطبية الجنوبية بعيدة. وليس القارة القطبية الجنوبية."
 ]
