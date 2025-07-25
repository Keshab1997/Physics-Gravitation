const allFlashcardSets = {
    // সেট ১: অভিকর্ষ ও মহাকর্ষ - প্রশ্ন ১-১০
    '1': [
        { 
            question: "‘মাধ্যাকর্ষণ’ আবিষ্কার করেন কে?", 
            answer: "সঠিক উত্তর: B) নিউটন। ব্যাখ্যা: বিজ্ঞানী স্যার আইজ্যাক নিউটন আপেল পতন পর্যবেক্ষণ করে মহাবিশ্বের যেকোনো দুটি বস্তুকণার মধ্যে আকর্ষণ বলের ধারণা দেন, যা 'মহাকর্ষ সূত্র' (Universal Law of Gravitation) নামে পরিচিত।" 
        },
        { 
            question: "মহাকর্ষীয় ধ্রুবক (G) -এর একক কী?", 
            answer: "সঠিক উত্তর: C) cm³ sec⁻² gm⁻¹। ব্যাখ্যা: মহাকর্ষীয় ধ্রুবক (G) এর একক CGS পদ্ধতিতে cm³ sec⁻² gm⁻¹ এবং SI পদ্ধতিতে Nm²kg⁻² হয়।" 
        },
        { 
            question: "দুটি বস্তুর মধ্যে ক্রিয়াশীল মহাকর্ষ বল কীভাবে পরিবর্তিত হয়, যদি একটি বস্তুর ভর দ্বিগুণ ও বস্তুদ্বয়ের মধ্যে ব্যবধান পূর্বের দ্বিগুণ করা হয়?", 
            answer: "সঠিক উত্তর: C) বল পূর্বের মতো অর্ধেক হয়। ব্যাখ্যা: মহাকর্ষ সূত্র অনুযায়ী, F' = G * (2m₁ * m₂) / (2R)² = (2/4) * [G * m₁m₂ / R²] = (1/2) * F। সুতরাং, নতুন বল পূর্বের বলের অর্ধেক হবে।" 
        },
        { 
            question: "'মহাকর্ষীয় ধ্রুবক' (G) -এর মাত্রা কী হবে?", 
            answer: "সঠিক উত্তর: B) M⁻¹L³T⁻²। ব্যাখ্যা: G = (F * R²) / (m₁ * m₂) সূত্র থেকে মাত্রা নির্ণয় করলে G = [MLT⁻²] * [L²] / [M²] = [M⁻¹L³T⁻²] হয়।" 
        },
        { 
            question: "একটি পালক, একটি কাঠের বল বা একটি ইস্পাতের বলের মধ্যে শূন্যস্থানে কোনটি সবচেয়ে দ্রুত পতিত হয়?", 
            answer: "সঠিক উত্তর: D) সবগুলিই সমান দ্রুততায়। ব্যাখ্যা: শূন্যস্থানে (যেখানে কোনো বাতাস নেই) বায়ুর বাধা কাজ করে না। তাই গ্যালিলিওর সূত্র অনুযায়ী, সব বস্তু—তা হালকা হোক বা ভারী—একই অভিকর্ষজ ত্বরণে নিচে পড়ে এবং একই সময়ে ভূমি স্পর্শ করে।" 
        },
        { 
            question: "নিম্নের কোনটি সবচেয়ে ক্ষীণ শক্তি?", 
            answer: "সঠিক উত্তর: A) অভিকর্ষজ শক্তি। ব্যাখ্যা: প্রকৃতির চারটি মৌলিক বলের (মহাকর্ষ বল, তড়িৎচুম্বকীয় বল, সবল নিউক্লীয় বল, দুর্বল নিউক্লীয় বল) মধ্যে মহাকর্ষ বল হলো সবচেয়ে দুর্বল বা ক্ষীণতম।" 
        },
        { 
            question: "সমবৃত্তীয় গতিতে ত্বরণের অভিমুখ কোন দিকে হয়?", 
            answer: "সঠিক উত্তর: D) বেগের লম্ব অভিমুখে। ব্যাখ্যা: সমবৃত্তীয় গতিতে কেন্দ্রাভিমুখী ত্বরণের অভিমুখ সর্বদা বৃত্তের কেন্দ্র বরাবর এবং বেগের অভিমুখের সাথে লম্বভাবে থাকে।" 
        },
        { 
            question: "1797-1798 সালে হেনরি ক্যাভেন্ডিসের পরীক্ষা অনুযায়ী মহাকর্ষের সর্বজনীন ধ্রুবকের (G) মান কত?", 
            answer: "সঠিক উত্তর: C) 6.67 × 10⁻¹¹ Nm²/kg²। ব্যাখ্যা: হেনরি ক্যাভেন্ডিস তাঁর পরীক্ষার মাধ্যমে মহাকর্ষীয় ধ্রুবক (G) -এর মান নির্ণয় করেন, যা প্রায় 6.67 × 10⁻¹¹ Nm²/kg²।" 
        },
        { 
            question: "অবাধে পতিত বস্তুর জন্য নিম্নের কোন বিবৃতিটি সঠিক?", 
            answer: "সঠিক উত্তর: C) এর গতি শুধুমাত্র অভিকর্ষ দ্বারা প্রভাবিত হয়। ব্যাখ্যা: 'অবাধে পতন' (Free Fall) বলতে বোঝায় এমন একটি অবস্থা যেখানে একটি বস্তুর গতি শুধুমাত্র মাধ্যাকর্ষণ বল দ্বারা প্রভাবিত হয় এবং বায়ুর বাধা শূন্য ধরা হয়।" 
        },
        { 
            question: "কোনো চলন্ত বিমান থেকে একটি স্থানে বোমা ফেলা হলে বিমানচালক কী দেখবেন?", 
            answer: "সঠিক উত্তর: B) বোমাটি বক্রপথে চলে ওই স্থানের সামনে পড়ে। ব্যাখ্যা: বোমাটি ফেলার মুহূর্তে জাড্যের কারণে বিমানের সমান অনুভূমিক গতি লাভ করে। কিন্তু বায়ুর বাধার কারণে বোমাটির অনুভূমিক বেগ ধীরে ধীরে কমতে থাকে, তাই বিমানচালক দেখবেন বোমাটি সামনে এগিয়ে একটি অধিবৃত্তাকার পথে নিচে পড়ছে।" 
        }
    ],
    // সেট ২: অভিকর্ষ ও মহাকর্ষ - প্রশ্ন ১১-২০
    '2': [
        { 
            question: "একটি সুতায় বাঁধা পাথর বৃত্তাকার পথে ঘুরতে ঘুরতে হঠাৎ ছিঁড়ে গেলে কী হবে?", 
            answer: "সঠিক উত্তর: A) পাথরটি স্পর্শক বরাবর যাবে। ব্যাখ্যা: সুতা ছিঁড়ে গেলে কেন্দ্রাভিমুখী বল শূন্য হয়ে যায় এবং পাথরটি জড়তার কারণে তার শেষ মুহূর্তের গতিপথ অর্থাৎ স্পর্শক বরাবর সরলরেখায় ছিটকে বেরিয়ে যায়।" 
        },
        { 
            question: "দুধকে মন্থন করলে ননী আলাদা হয়ে যায় কোন বলের কারণে?", 
            answer: "সঠিক উত্তর: D) অপকেন্দ্র বল। ব্যাখ্যা: দুধ মন্থন করার সময় ঘূর্ণনের ফলে একটি কেন্দ্রবিমুখ বা অপকেন্দ্র বলের সৃষ্টি হয়। দুধের চেয়ে ননী হালকা হওয়ায় এটি কেন্দ্রের দিকে সরে আসে এবং ভারী অংশ বাইরের দিকে ছিটকে যায়।" 
        },
        { 
            question: "একটি রকেট পৃথিবী ছেড়ে চাঁদে অবতরণ করল ও পৃথিবীতে ফিরে এল। এতে সবচেয়ে বেশি শক্তি (জ্বালানি) কখন লাগল?", 
            answer: "সঠিক উত্তর: A) পৃথিবী থেকে উঠতে। ব্যাখ্যা: পৃথিবীর অভিকর্ষজ ত্বরণ চাঁদের তুলনায় প্রায় ৬ গুণ বেশি। তাই পৃথিবীর শক্তিশালী মহাকর্ষীয় আকর্ষণ কাটিয়ে মুক্তিবেগ অর্জন করতে সবচেয়ে বেশি শক্তি বা জ্বালানির প্রয়োজন হয়।" 
        },
        { 
            question: "একটি বলকে 40 m/s বেগে উলম্বভাবে উপরের দিকে ছুড়ে দিলে বলটির সর্বোচ্চ উচ্চতায় পৌঁছাতে কত সময় লাগবে (প্রায়)? (g = 10 m/s² ধরে)", 
            answer: "সঠিক উত্তর: C) 4 s। ব্যাখ্যা: গতির সমীকরণ v = u - gt থেকে পাই, 0 = 40 - 10 * t, সুতরাং t = 40 / 10 = 4 সেকেন্ড।" 
        },
        { 
            question: "পৃথিবীপৃষ্ঠে সঠিক সময় দেয় এমন একটি পেন্ডুলামকে যদি চাঁদে নিয়ে যাওয়া হয়, তবে সেটি কেমন চলবে?", 
            answer: "সঠিক উত্তর: D) √6 গুণ ধীরে চলবে। ব্যাখ্যা: পেন্ডুলামের দোলনকাল (T) g-এর বর্গমূলের ব্যস্তানুপাতিক (T ∝ 1/√g)। চাঁদে g পৃথিবীর ১/৬ ভাগ হওয়ায় দোলনকাল √6 গুণ বেড়ে যায়, অর্থাৎ দোলকটি ধীরে চলে।" 
        },
        { 
            question: "পৃথিবীপৃষ্ঠে একটি বস্তুর ওজন 10 N হলে পৃথিবীর কেন্দ্রে তার ওজন কত হবে?", 
            answer: "সঠিক উত্তর: A) 0 N। ব্যাখ্যা: পৃথিবীর কেন্দ্রে অভিকর্ষজ ত্বরণ (g) -এর মান শূন্য। যেহেতু ওজন (W) = ভর (m) × g, তাই পৃথিবীর কেন্দ্রে বস্তুর ওজন শূন্য হবে।" 
        },
        { 
            question: "কোনো বস্তুকে ভূপৃষ্ঠ থেকে যত উপরের দিকে ওঠানো হবে, তার ওজন—", 
            answer: "সঠিক উত্তর: C) কমবে। ব্যাখ্যা: ভূপৃষ্ঠ থেকে উচ্চতা বাড়ার সাথে সাথে অভিকর্ষজ ত্বরণ (g)-এর মান কমতে থাকে। যেহেতু ওজন g-এর সমানুপাতিক, তাই বস্তুর ওজনও কমতে থাকে।" 
        },
        { 
            question: "একটি বস্তুর পৃথিবীপৃষ্ঠে ওজন 9.8 N হলে তার ভর কত?", 
            answer: "সঠিক উত্তর: C) 1 কিগ্রা। ব্যাখ্যা: আমরা জানি, ওজন (W) = ভর (m) × g। সুতরাং, m = W/g = 9.8 N / 9.8 m/s² = 1 কেজি।" 
        },
        { 
            question: "নিম্নলিখিত বিজ্ঞানীদের মধ্যে কে 'আপেক্ষিকতাবাদ তত্ত্ব' (Theory of Relativity)-এর সঙ্গে জড়িত?", 
            answer: "সঠিক উত্তর: C) আইনস্টাইন। ব্যাখ্যা: আলবার্ট আইনস্টাইন তাঁর বিখ্যাত আপেক্ষিকতাবাদ তত্ত্ব (বিশেষ এবং সাধারণ) প্রদান করেন, যা আধুনিক পদার্থবিজ্ঞানের ভিত্তি স্থাপন করেছে।" 
        },
        { 
            question: "কোন উষ্ণতায়, 1 ঘন সেন্টিমিটার (1 cc) আয়তনের বিশুদ্ধ জলের ভরকে 1 গ্রাম বলা হয়?", 
            answer: "সঠিক উত্তর: C) 4°C। ব্যাখ্যা: 4°C উষ্ণতায় জলের ঘনত্ব সর্বাধিক হয়। এই উষ্ণতায় 1 ঘন সেন্টিমিটার বিশুদ্ধ জলের ভর ঠিক 1 গ্রাম হয়।" 
        }
    ],
    // সেট ৩: অভিকর্ষ ও মহাকর্ষ - প্রশ্ন ২১-৩০
    '3': [
        { 
            question: "একটি বস্তুর উপর বিপরীতমুখী এবং অসমরৈখিক (non-collinear) দুটি অসমান বল প্রয়োগ করা হলে, বস্তুটির গতি কীরূপ হবে?", 
            answer: "সঠিক উত্তর: D) বৃত্তাকার এবং রৈখিক উভয় প্রকার গতিই থাকবে। ব্যাখ্যা: দুটি অসমান ও বিপরীতমুখী বলের একটি লব্ধি বল থাকে, যা রৈখিক গতি দেয়। আবার, বল দুটি একই সরলরেখায় না থাকায় একটি টর্ক তৈরি করে, যা ঘূর্ণন গতি দেয়।" 
        },
        { 
            question: "বিভিন্ন গতি ও তাদের উদাহরণের মধ্যে ভুল জোড়টি নির্বাচন করো: A) ঘূর্ণন গতি — পৃথিবীর নিজ অক্ষের উপর ঘূর্ণন B) সরলরৈখিক গতি — লিফটের ওঠানামা C) আবর্তন গতি — উইন্ডমিলের ব্লেড D) বৃত্তীয় গতি — পৃথিবীর চারপাশে সূর্যের পরিক্রমণ", 
            answer: "সঠিক উত্তর: D) বৃত্তীয় গতি — পৃথিবীর চারপাশে সূর্যের পরিক্রমণ। ব্যাখ্যা: সূর্য পৃথিবীর চারপাশে ঘোরে না, বরং পৃথিবী সূর্যের চারপাশে ঘোরে। তাই এই জোড়টি জ্যোতির্বিজ্ঞানের দিক থেকে ভুল।" 
        },
        { 
            question: "বিভিন্ন গতি ও তাদের উদাহরণের মধ্যে ভুল জোড়টি নির্বাচন করো: A) পর্যায়বৃত্ত গতি — পৃথিবীর নিজ অক্ষের উপর ঘূর্ণন B) সরলরৈখিক গতি — শূন্যে ছুঁড়ে দেওয়া একটি পাথর C) আবর্তন গতি — উইন্ডমিলের ব্লেড D) দোদুল্যমান গতি — নদীতে নৌকার দোদুল্যমান অবস্থা", 
            answer: "সঠিক উত্তর: B) সরলরৈখিক গতি — শূন্যে ছুঁড়ে দেওয়া একটি পাথর। ব্যাখ্যা: শূন্যে কোনো বস্তুকে কোণ করে ছুঁড়ে দিলে তা অভিকর্ষের প্রভাবে একটি বক্রপথে (অধিবৃত্তাকার পথে) চলে, সরলরেখায় নয়।" 
        },
        { 
            question: "একটি পালক, একটি কাঠের বল বা একটি ইস্পাতের বলের মধ্যে শূন্যস্থানে কোনটি সবচেয়ে দ্রুত পতিত হয়?", 
            answer: "সঠিক উত্তর: D) সবগুলিই সমান দ্রুততায়। ব্যাখ্যা: শূন্যস্থানে কোনো বায়ুর বাধা থাকে না। তাই, বস্তুর ভর বা আকৃতি যাই হোক না কেন, সব বস্তু একই অভিকর্ষজ ত্বরণে নিচে পড়ে এবং একই সময়ে মাটি স্পর্শ করে।" 
        },
        { 
            question: "অবাধে পতিত বস্তুর (freely falling body) জন্য নিম্নের কোন বিবৃতিটি সঠিক?", 
            answer: "সঠিক উত্তর: C) এর গতি শুধুমাত্র অভিকর্ষ বল দ্বারা প্রভাবিত হয়। ব্যাখ্যা: পদার্থবিজ্ঞানে 'অবাধে পতন' বা 'Free Fall'-এর সংজ্ঞা অনুযায়ী, কোনো বস্তুর গতি যখন শুধুমাত্র অভিকর্ষ বলের অধীনে থাকে, তখন তাকে অবাধ পতন বলে।" 
        },
        { 
            question: "একটি বস্তুর উপর বিপরীতমুখী এবং অসমরৈখিক দুটি অসমান বল প্রয়োগ করা হল। এর ফলে বস্তুটির-", 
            answer: "সঠিক উত্তর: D) বৃত্তাকার এবং রৈখিক উভয় প্রকার গতিই থাকবে। ব্যাখ্যা: দুটি অসমান, বিপরীতমুখী এবং অসমরৈখিক বল বস্তুর উপর একটি লব্ধি বল (রৈখিক গতির কারণ) এবং একটি টর্ক (ঘূর্ণন গতির কারণ) উভয়ই তৈরি করে।" 
        },
        { 
            question: "কোন যানবাহন বৃত্তাকার পথে ঘোরার সময় কোন বলটি প্রাপ্ত হয়?", 
            answer: "সঠিক উত্তর: B) কেন্দ্রাভিমুখী বল (Centripetal Force)। ব্যাখ্যা: কোনো বস্তুকে বৃত্তাকার পথে ঘোরানোর জন্য একটি বলের প্রয়োজন হয় যা সর্বদা বৃত্তের কেন্দ্রের দিকে কাজ করে। এই বলটিই হলো কেন্দ্রাভিমুখী বল।" 
        },
        { 
            question: "পৃথিবীপৃষ্ঠে একটি বস্তুর ওজন 9 N। পৃথিবীর 9 গুণ অভিকর্ষজ ত্বরণ সম্পন্ন কোনো গ্রহের পৃষ্ঠে ওই বস্তুর ওজন কত হবে?", 
            answer: "সঠিক উত্তর: C) ওজন হবে পূর্বের 9 গুণ। ব্যাখ্যা: ওজন (W) = ভর (m) × অভিকর্ষজ ত্বরণ (g)। নতুন ওজন = m × (9g) = 9 × (mg) = 9 × 9 N = 81 N। সুতরাং, ওজন পূর্বের 9 গুণ হবে।" 
        },
        { 
            question: "পৃথিবীপৃষ্ঠে একটি বস্তুর ভর 10 kg হলে পৃথিবীর কেন্দ্রে তার ওজন কত হবে?", 
            answer: "সঠিক উত্তর: A) 0। ব্যাখ্যা: বস্তুর 'ওজন' হলো তার উপর প্রযুক্ত অভিকর্ষ বল। পৃথিবীর কেন্দ্রে অভিকর্ষজ ত্বরণের (g) মান শূন্য। তাই ওজন W = 10 kg × 0 m/s² = 0 N।" 
        },
        { 
            question: "নিম্নলিখিত কোনটি রকেটের জ্বালানি হিসেবে ব্যবহৃত হয়?", 
            answer: "সঠিক উত্তর: C) তরল হাইড্রোজেন। ব্যাখ্যা: রকেটের জ্বালানি হিসেবে উচ্চ দাহ্য পদার্থ ব্যবহার করা হয়। তরল হাইড্রোজেন এবং তরল অক্সিজেন একটি শক্তিশালী রকেট জ্বালানি (propellant) হিসেবে কাজ করে।" 
        }
    ]
};