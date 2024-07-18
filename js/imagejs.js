  document.addEventListener('DOMContentLoaded', function () {
            const hadeethList = [
				"صلُّوا كما رأيتموني أُصلِّي",
				"إذا دخل أحدكم المسجد فلْيركع ركعتين قبل أن يجلس",
				"الصَّلَاةُ الخَمْسُ، وَالْجُمْعَةُ إلى الجُمْعَةِ، كَفَّارَةٌ لِما بيْنَهُنَّ، ما لَمْ تُغْشَ الكَبَائِرُ",
				"من حافظَ علَيها كانت لَهُ نورًا وبرهانًا ونَجاةً يومَ القيامةِ",
				"مَن صَلَّى البَرْدَيْنِ دَخَلَ الجَنَّةَ",
            ];

            function showRandomHadeeth() {
                const hadeethDiv = document.getElementById('hadeethDisplay');
                const randomIndex = Math.floor(Math.random() * hadeethList.length);
                hadeethDiv.innerText = hadeethList[randomIndex];
                hadeethDiv.classList.add('sparkle');

                setTimeout(() => {
                    hadeethDiv.classList.remove('sparkle');
                }, 5000);
            }

            setInterval(showRandomHadeeth, 15000); // Show a random Hadeeth every 15 seconds

            // Update the clock every second
        });
