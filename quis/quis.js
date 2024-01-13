const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (response) => {
    chatbox.appendChild(createChatLi(response, "incoming"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
}

const handleChat = () => {
    const userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi();

        // Generate response based on user message
        const response = generateUserResponse(userMessage);
        generateResponse(response);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

// Function to generate response based on user message
const generateUserResponse = (userMessage) => {
    const knowledgeBase = {
      "apa itu peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Apa Itu Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "apa itu peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Apa Itu Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Pengertian Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Pengertian peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "pengertian peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "pengertian Peluang?": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Pengertian Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Pengertian peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "pengertian peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "pengertian Peluang": "Peluang atau biasa di sebut probabilitas adalah besarnya kemungkinan terjadinya suatu kejadian.",
      "Pengertian Kaidah Pencacahan?": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "pengertian kaidah pencacahan?": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "Pengertian Kaidah Pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "pengertian kaidah pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "Kaidah Pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "kaidah pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "kaidah Pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "Kaidah pencacahan": "Kaidah pencacahan adalah cara untuk menghitung banyaknya kemungkinan dari suatu percobaan.",
      "Rumus Umum Kaidah Pencacahan": "a x b x c x ...",
      "rumus umum kaidah pencacahan": "a x b x c x ...",
      "Rumus Kaidah Pencacahan": "a x b x c x ...",
      "rumus kaidah pencacahan": "a x b x c x ...",
      "Permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
      "permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
      "Pengertian Permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
      "pengertian permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
      "Pengertian permutasi": "Permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya.",
      "Kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
      "kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
      "Pengertian Kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
      "pengertian kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
      "Pengertian kombinasi": "Kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil.",
      "perbedaan kombinasi dengan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
      "Perbedaan kombinasi dengan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
      "perbedaan permutasi dengan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
      "Perbedaan permutasi dengan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
      "perbedaan permutasi dan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
      "Perbedaan permutasi dan kombinasi": "Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda. sedangkan Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda.",
      "perbedaan kombinasi dan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
      "Perbedaan kombinasi dan permutasi": "Kombinasi: Melibatkan pemilihan elemen tanpa memperhatikan urutan. Urutan elemen tidak penting, dan mengubah urutannya tidak menghasilkan kombinasi yang berbeda. sedangkan Permutasi: Melibatkan pengaturan atau urutan elemen. Urutan elemen sangat penting, dan mengubah urutannya menghasilkan permutasi yang berbeda.",
      "rumus kombinasi": "C(n, k) = n! / (k!(n - k)!)",
      "Rumus kombinasi": "C(n, k) = n! / (k!(n - k)!)",
      "Rumus permutasi": "P(n, k) = n! / (n - k)!",
      "rumus permutasi": "P(n, k) = n! / (n - k)!",
      "contoh soal permutasi": "Seorang fotografer pernikahan harus memanfaatkan waktu dengan baik. Ia hendak mengambil foto dari 10 tamu yang merupakan kerabat dekat. Mereka ingin berfoto secara bergantian dengan susunan 5 orang 5 orang berjejer dari kanan ke kiri. Banyak posisi foto yang dapat dipilih pada saat sesi pertama adalah… penyelesaian: P(n,r) = n!/(n-r)! → P(10,5) = 10!/(10-5)! → = 10 x 9 x 8 x 7 x 6 x 5! / 5! → = 10 x 9 x 8 x 7 x 6 → = 30.240",
      "soal permutasi": "Seorang fotografer pernikahan harus memanfaatkan waktu dengan baik. Ia hendak mengambil foto dari 10 tamu yang merupakan kerabat dekat. Mereka ingin berfoto secara bergantian dengan susunan 5 orang 5 orang berjejer dari kanan ke kiri. Banyak posisi foto yang dapat dipilih pada saat sesi pertama adalah… penyelesaian: P(n,r) = n!/(n-r)! → P(10,5) = 10!/(10-5)! → = 10 x 9 x 8 x 7 x 6 x 5! / 5! → = 10 x 9 x 8 x 7 x 6 → = 30.240",
      "contoh soal kombinasi": "Pada sebuah box terdapat 10 kelereng kecil yang sudah diberi tulisan huruf A hingga J. Seorang anak ingin mengambil 4 sekaligus secara acak. Ada berapa cara yang bisa ia gunakan untuk mengambilnya?  Penyelesaian; C (n,r) = n! / r! . (n – r)! → C (10,4) = 10! / 4! . (10 – 4)! → = 10 x 9 x 8 x 7 x 6! / 4 x 3 x 2 x 1 x 6! → = 5 x 3 x 2 x 7 x 6! / 6! → = 5 x 3 x 2 x 7 → = 210",
      "soal kombinasi": "Pada sebuah box terdapat 10 kelereng kecil yang sudah diberi tulisan huruf A hingga J. Seorang anak ingin mengambil 4 sekaligus secara acak. Ada berapa cara yang bisa ia gunakan untuk mengambilnya?  Penyelesaian; C (n,r) = n! / r! . (n – r)! → C (10,4) = 10! / 4! . (10 – 4)! → = 10 x 9 x 8 x 7 x 6! / 4 x 3 x 2 x 1 x 6! → = 5 x 3 x 2 x 7 x 6! / 6! → = 5 x 3 x 2 x 7 → = 210",
      "macam macam permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
      "Macam Macam permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
      "macam permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
      "jenis permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
      "jenis jenis permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
      "Jenis Permutasi": "(1). Permutasi dengan Pengulangan ; Dalam permutasi ini, objek dapat muncul beberapa kali dalam pengaturan yang sama. Misalnya, dalam kata MATA, Anda dapat mempermutasikan huruf A sehingga Anda mendapatkan MATA lagi. Permutasi dengan pengulangan dihitung dengan rumus n! / (n1! * n2! * ... * nk!), di mana n adalah jumlah total objek, dan n1, n2, nk adalah jumlah objek yang setiap objeknya ada dalam kelompok yang sama. (2). Permutasi Tanpa Pengulangan ; Dalam permutasi ini, setiap objek hanya muncul satu kali dalam pengaturan. Misalnya, mengatur huruf dalam kata ALAS menjadi ASLA. Permutasi tanpa pengulangan dihitung dengan rumus n! (n faktorial), di mana n adalah jumlah total objek. (3). Permutasi Terbatas ; Dalam permutasi terbatas, hanya sebagian objek yang diatur, bukan semua objek. Misalnya, Anda hanya ingin mengatur 3 dari 5 objek. Permutasi terbatas dihitung dengan rumus n! / (n-r)!, di mana n adalah jumlah total objek dan r adalah jumlah objek yang ingin diatur. (4). Permutasi Siklis ; Permutasi siklis adalah pengaturan objek dalam siklus tertentu. Misalnya, mengatur huruf dalam kata ABCD menjadi BCDA adalah permutasi siklis. Permutasi siklis umumnya digunakan dalam teori grup. (5). Permutasi Lexicographic ; Ini adalah pengaturan objek dalam urutan tertentu berdasarkan aturan leksikografis. Dalam permutasi leksikografis, objek diurutkan berdasarkan urutan abjad atau urutan angka. Ini sering digunakan dalam pemrograman dan matematika diskrit. (6). Permutasi Invers ; Permutasi invers adalah pengaturan yang menggambarkan sejauh mana setiap elemen dalam urutan awal digantikan oleh elemen lain dalam permutasi. Ini berguna dalam pemrosesan sinyal dan kompresi data.",
      "permutasi siklis": "Permutasi siklis adalah salah satu konsep dalam teori kombinatorial yang digunakan untuk menghitung berapa banyak cara mengatur elemen-elemen dalam sebuah himpunan sedemikian rupa sehingga mereka membentuk beberapa siklus. Permutasi siklis umumnya digunakan dalam konteks mengatur elemen-elemen dalam suatu himpunan yang dibagi menjadi beberapa kelompok siklis.",
      "pengertian permutasi siklis": "Permutasi siklis adalah salah satu konsep dalam teori kombinatorial yang digunakan untuk menghitung berapa banyak cara mengatur elemen-elemen dalam sebuah himpunan sedemikian rupa sehingga mereka membentuk beberapa siklus. Permutasi siklis umumnya digunakan dalam konteks mengatur elemen-elemen dalam suatu himpunan yang dibagi menjadi beberapa kelompok siklis.",
      "rumus permutasi siklis": "Psiklis = (n-1)!",
      "peluang suatu kejadian": "Peluang suatu kejadian adalah ukuran sejauh mana kejadian tersebut mungkin terjadi dalam konteks percobaan atau situasi tertentu. Peluang biasanya dinyatakan sebagai angka antara 0 dan 1, di mana 0 menunjukkan bahwa kejadian tersebut pasti tidak akan terjadi, dan 1 menunjukkan bahwa kejadian tersebut pasti akan terjadi. Sebagai contoh, jika Anda melempar sebuah koin, maka peluang munculnya kepala adalah 0,5 (atau 50%), yang berarti ada setengah peluang bahwa kepala akan muncul.",
      "pengertian peluang suatu kejadian": "Peluang suatu kejadian adalah ukuran sejauh mana kejadian tersebut mungkin terjadi dalam konteks percobaan atau situasi tertentu. Peluang biasanya dinyatakan sebagai angka antara 0 dan 1, di mana 0 menunjukkan bahwa kejadian tersebut pasti tidak akan terjadi, dan 1 menunjukkan bahwa kejadian tersebut pasti akan terjadi. Sebagai contoh, jika Anda melempar sebuah koin, maka peluang munculnya kepala adalah 0,5 (atau 50%), yang berarti ada setengah peluang bahwa kepala akan muncul.",
      "rumus peluang suatu kejadian": "Peluang (A) = Jumlah Kejadian Yang Diinginkan (n(A)) / Jumlah Kemungkinan Kejadian (n(S))",
      "frekuensi harapan": "Frekuensi harapan adalah konsep dalam teori probabilitas yang mengacu pada nilai rata-rata atau ekspektasi dari suatu kejadian atau peristiwa berdasarkan probabilitasnya. Ini adalah angka yang menggambarkan apa yang dapat diharapkan dalam jangka panjang jika percobaan atau situasi serupa diulang banyak kali.",
      "pengertian frekuensi harapan": "Frekuensi harapan adalah konsep dalam teori probabilitas yang mengacu pada nilai rata-rata atau ekspektasi dari suatu kejadian atau peristiwa berdasarkan probabilitasnya. Ini adalah angka yang menggambarkan apa yang dapat diharapkan dalam jangka panjang jika percobaan atau situasi serupa diulang banyak kali.",
      "rumus frekuensi harapan": "Fh = n.P",
      "peluang komplemen": "Peluang komplemen adalah konsep dalam teori probabilitas yang mengacu pada peluang bahwa suatu kejadian tidak terjadi. Ini dapat digunakan untuk menghitung peluang suatu kejadian A yang merupakan lawan dari kejadian B.",
      "pengertian peluang komplemen": "Peluang komplemen adalah konsep dalam teori probabilitas yang mengacu pada peluang bahwa suatu kejadian tidak terjadi. Ini dapat digunakan untuk menghitung peluang suatu kejadian A yang merupakan lawan dari kejadian B.",
      "rumus peluang komplemen": "Pc = 1-P",
      "peluang kejadian majemuk": "Peluang kejadian majemuk adalah konsep dalam teori probabilitas yang berkaitan dengan perhitungan peluang ketika ada lebih dari satu kejadian yang terlibat. Kejadian majemuk terjadi ketika kita ingin menghitung peluang dari kombinasi atau interaksi beberapa kejadian yang terjadi secara bersamaan atau berurutan. ada tiga jenis peluang kejadian majemuk; (1). kejadian saling bebas ; dua kejadian dikatakan saling bebas jika munculnya kejadian pertama tidak mempengaruhi peluang munculnya kejadian kedua.  (2). kejadian saling lepas ; dua kejadian dikatakan saling lepas adalah dua kejadian yang tidak bisa terjadi bersamaan. (3). kejadian tidak saling lepas ; kejadian tidak saling lepas adalah kejadian yang bisa berlangsung secara bersamaan.",
      "pengertian peluang kejadian majemuk": "Peluang kejadian majemuk adalah konsep dalam teori probabilitas yang berkaitan dengan perhitungan peluang ketika ada lebih dari satu kejadian yang terlibat. Kejadian majemuk terjadi ketika kita ingin menghitung peluang dari kombinasi atau interaksi beberapa kejadian yang terjadi secara bersamaan atau berurutan. ada tiga jenis peluang kejadian majemuk; (1). kejadian saling bebas ; dua kejadian dikatakan saling bebas jika munculnya kejadian pertama tidak mempengaruhi peluang munculnya kejadian kedua.  (2). kejadian saling lepas ; dua kejadian dikatakan saling lepas adalah dua kejadian yang tidak bisa terjadi bersamaan. (3). kejadian tidak saling lepas ; kejadian tidak saling lepas adalah kejadian yang bisa berlangsung secara bersamaan.",
      "kejadian saling bebas": "Kejadian saling bebas adalah konsep dalam teori probabilitas yang mengacu pada dua atau lebih kejadian yang tidak saling memengaruhi atau bergantung satu sama lain dalam pengaruh mereka terhadap hasil akhir. Dengan kata lain, jika dua atau lebih kejadian dikatakan saling bebas, maka hasil dari satu kejadian tidak memengaruhi peluang atau hasil dari kejadian lainnya.",
      "pengertian kejadian saling bebas": "Kejadian saling bebas adalah konsep dalam teori probabilitas yang mengacu pada dua atau lebih kejadian yang tidak saling memengaruhi atau bergantung satu sama lain dalam pengaruh mereka terhadap hasil akhir. Dengan kata lain, jika dua atau lebih kejadian dikatakan saling bebas, maka hasil dari satu kejadian tidak memengaruhi peluang atau hasil dari kejadian lainnya.",
      "rumus kejadian saling bebas": "P(A ∩ B) = P(A) x P(B)",
      "kejadian saling lepas": "Kejadian yang saling lepas (independent events) adalah istilah dalam teori probabilitas yang menggambarkan dua atau lebih kejadian yang tidak memiliki hubungan atau ketergantungan satu sama lain dalam hal hasil atau peluangnya. Dalam kejadian saling lepas, hasil atau peluang dari satu kejadian tidak memengaruhi hasil atau peluang dari kejadian lainnya.",
      "pengertian kejadian saling lepas": "Kejadian yang saling lepas (independent events) adalah istilah dalam teori probabilitas yang menggambarkan dua atau lebih kejadian yang tidak memiliki hubungan atau ketergantungan satu sama lain dalam hal hasil atau peluangnya. Dalam kejadian saling lepas, hasil atau peluang dari satu kejadian tidak memengaruhi hasil atau peluang dari kejadian lainnya.",
      "rumus kejadian saling lepas": "P(A ∪ B) = P(A) + P(B)",
      "kejadian tidak saling lepas": "Kejadian yang tidak saling lepas (dependent events) adalah kejadian di mana hasil atau peluang dari satu kejadian memengaruhi hasil atau peluang dari kejadian lainnya. Dalam kejadian yang tidak saling lepas, hubungan antara kejadian-kejadian tersebut menyebabkan salah satu kejadian tergantung pada yang lain.",
      "pengertian kejadian tidak saling lepas": "Kejadian yang tidak saling lepas (dependent events) adalah kejadian di mana hasil atau peluang dari satu kejadian memengaruhi hasil atau peluang dari kejadian lainnya. Dalam kejadian yang tidak saling lepas, hubungan antara kejadian-kejadian tersebut menyebabkan salah satu kejadian tergantung pada yang lain.",
      "rumus kejadian tidak saling lepas": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
      "permutasi dan kombinasi": "permutasi adalah suatu konsep dalam matematika yang mengacu pada pengaturan atau penyusunan ulang elemen-elemen dari suatu himpunan atau kumpulan objek. Dalam permutasi, urutan atau susunan dari elemen-elemen ini penting, dan setiap susunan yang berbeda dianggap sebagai permutasi yang berbeda. Permutasi sering digunakan dalam berbagai bidang matematika, ilmu komputer, statistik, dan banyak aplikasi lainnya, kombinasi adalah konsep dalam matematika yang mengacu pada cara mengambil sejumlah elemen dari suatu himpunan atau kumpulan objek tanpa memperhatikan urutan atau susunan mereka. Dalam kombinasi, yang penting adalah pemilihan elemen-elemen ini, bukan cara mereka diatur. Dengan kata lain. rumus permutasi : P(n, k) = n! / (n - k)!, kombinasi adalah cara untuk memilih sekelompok objek dari himpunan tertentu tanpa memperhatikan urutan di mana objek-objek tersebut diambil. rumus kombinasi : C(n, k) = n! / (k!(n - k)!)",
      "": "",
        // ... tambahkan data lainnya ...
    };
    return knowledgeBase[userMessage] || "Maaf, pertanyaan tidak ditemukan dalam basis data.";
};


document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector("nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    overlay = document.querySelector(".overlay"),
    dropdown = document.querySelector(".nav-link.has-dropdown .dropdown-content");

  menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
      navBar.classList.toggle("open");
    });
  });

  overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
  });

  const materiLink = document.querySelector(".nav-link.has-dropdown");

  materiLink.addEventListener("click", (event) => {
    dropdown.style.display = dropdown.style.display === "none" ? "flex" : "none";
  });
});


      const quizData = [
        {
            question: "1). Dua buah dadu dilempar satu kali. Peluang muncul jumlah mata dadu 10. Pilihlah pernyataan berikut yang benar",
            options: ["A. n(S) = 36 dan n(A) = 3", "B. n(S) = 36 dan n(A) = 4", "C. n(S) = 36 dan n(A) = 5", "D. n(S) = 36 dan n(A) = 6", "E. n(S) = 36 dan n(A) = 7"],
            correct: "A"
        },
        {
          question: "2). Dari 1 set kartu bridge diambil 1 kartu. Pluang terambil kartu As adalah. Pilihlah pernyataan berikut yang benar",
          options: ["A. n(S) = 52 dan n(A) = 4", "B. n(S) = 52 dan n(A) = 5", "C. n(S) = 52 dan n(A) = 2", "D. n(S) = 26 dan n(A) = 4", "E. n(S) = 26 dan n(A) = 6"],
          correct: "A"
      },
      {
        question: "3). Dari 1 koin dan 1 dadu dilempar 1 kali. Peluang muncul gambar pada koin dan angka ganjil pada dadu adalah ...",
        options: ["A. P = 1/3", "B. P = 1/4", "C. P = 2/3", "D. P = 5/12", "E. P = 7/12"],
        correct: "B"
    },
        {
          question: "4). Dari angka-angka 2, 3, 4, 5, 6 akan disusun 3 angka berlainan. Banyak susunan angka yang dapat dibuat adalah ...?",
          options: ["A. n = 5 dan r = 4", "B. n = 5 dan r = 3", "C. n = 6 dan r = 3", "D. n = 4 dan r = 4", "E. n = 3 dan r = 3"],
          correct: "B"
      },
      {
        question: "5). Ada 2 orang laki-laki dan 3 orang perempuan duduk berjajar. Banyak susunan duduk yang dapat dibuat adalah ...?",
        options: ["A. 24", "B. 48", "C. 120", "D. 240", "E. 720"],
        correct: "C"
      },
      {
        question: "6). Dari 10 mangga yang ada, ada 7 mangga baik dan 3 mangga busuk. Diambil 1 mangga dari 10 mangga tersebut. Peluang terambil mangga busuk adalah ...?",
        options: ["A. P = 2/10", "B. P = 3/10", "C. P = 5/10", "D. P = 7/10", "E. P = 9/10"],
        correct: "B"
      },
      {
        question: "7). 6 orang pengurus OSIS sedang mengadakan rapat dengan posisi duduk melingkar. Banyak susunan duduk yang dapat dibuat adalah ...?",
        options: ["A. 720", "B. 360", "C. 120", "D. 24", "E. 6"],
        correct: "C"
      },
      {
        question: "8). Jika kita mempunyai 1 set kartu bridge, selanjutnya akan kita ambil sebuah kartu dari 1 set kartu bridge tersebut. Tentukan peluang terambilnya kartu as atau kartu hati dari proses pengambilan kartu tersebut!",
        options: ["A. 2/31", "B. 17/52", "C. 16/52", "D. 11/52", "E. 25/52"],
        correct: "C"
      },
      {
        question: "9). Seorang murid diminta mengerjakan 9 dari 10 soal ulangan, tetapi soal nomor 1 sampai 5 harus di kerjakan. Banyaknya pilihan yang dapat diambil murid tersebut adalah ...?",
        options: ["A. 4", "B. 5", "C. 6", "D. 9", "E. 10"],
        correct: "B"
      },
      {
        question: "10). Seorang satpam bank ingin mencetak nomor antrian nasabah yang terdiri dari tiga angka. Jika nomor antrian tersebut tidak memuat angka yang sama yang dibentuk dari angka 0, 1, 2, 3. Banyak pilihan nomor antrian yang dapat dibuat adalah ...?",
        options: ["A. Permutasi", "B. Kombinasi", "C. Siklis", "D. Frekuensi Harapan", "E. Peluang Bersyarat"],
        correct: "A"
      },
      {
        question: "11). Seorang peternak akan membeli hewan ternak untuk dipelihara. Dia akan membeli 3 ekor sapi, 4 ekor domba dan 5 ekor kambing. Seorang pedagang mempunyai 6 ekor sapi, 6 ekor domba dan 8 ekor kambing. Banyak cara yang dapat dilakukan untuk memilih hewan ternak yang akan dibeli adalah ...?",
        options: ["A. Permutasi", "B. Kombinasi", "C. Siklis", "D. Frekuensi Harapan", "E. Peluang Bersyarat"],
        correct: "B"
      },
      {
        question: "12). Dalam pelemparan 3 uang logam sekaligus. Jika sisi uang logam tersebut terdiri dari dua sisi yaitu sisi gambar dan sisi angka, maka paling sedikit peluang munculnya satu sisi gambar adalah ?",
        options: ["A. 3/18", "B. 5/28", "C. 2/24", "D. 5/24", "E. 3/14"],
        correct: "B"
      },
      {
        question: "13). Terdapat dua buah kotak, Kotak A berisi 5 bola merah dan 3 bola kuning sedangkan Kotak B berisi 5 bola merah dan 2 bola kuning. Jika akan diambil sebuah bola secara acak pada masing-masing kotak tersebut. Tentukan peluang terambilnya bola merah dari kotak A dan terambilnya bola kuning dari kotak B!",
        options: ["A. 10", "B. 20", "C. 40", "D. 80", "E. 120"],
        correct: "C"
      },
      {
        question: "14). Disuatu perkumpulan akan dipilih perwakilan yang terdiri dari 6 orang. Calon yang tersedia ada 5 pria dan 4 wanita. Banyaknya susunan perwakilan yang dapat dibentuk jika sekurang-kurangnya terpilih 3 pria adalah ...?",
        options: ["A. 84", "B. 82", "C. 76", "D. 74", "E. 76"],
        correct: "A"
      },
      {
        question: "15). Dari 12 orang yang terdiri atas 8 pria dan 4 wanita akan dibentuk kelompok kerja beranggotakan 4 orang. Jika dalam kelompok kerja itu terdapat paling sedikit 2 pria, maka banyaknya cara membentuknya ada ...?",
        options: ["A. 442", "B. 448", "C. 456", "D. 462", "E. 468"],
        correct: "D"
      },
      {
        question: "16). Sebuah panitia yang beranggotakan 4 orang akan dipilih dari kumpulan 4 pria dan 7 wanita. Bila dalam panitia tersebut diharuskan ada paling sedikit 4 wanita, maka banyaknya cara memilih adalah ...?",
        options: ["A. 1008", "B. 672", "C. 330", "D. 301", "E. 27"],
        correct: "D"
      },
      {
        question: "17). Dalam suatu kegiatan pramuka, regu A harus menambah 3 anggota lagi yang dapat dipilih dari 7 orang. Banyaknya cara memilih yang dapat dilakukan oleh regu A adalah ...?",
        options: ["A. 70", "B. 54", "C. 35", "D. 32", "E. 28"],
        correct: "C"
      },
      {
        question: "18). Akan dibuat nomor-nomor undian yang terdiri atas satu huruf dan diikuti dua buah angka yang berbeda dan angka kedua adalah bilangan genap. Banyaknya nomor undian ada ...?",
        options: ["A. 1160", "B. 1165", "C. 1170", "D. 1180", "E. 1185"],
        correct: "C"
      },
      {
        question: "19). Dalam pelemparan dua buah mata dadu sekaligus, berapakah peluang keluarnya mata dadu pertama angka 1 dan mata dadu kedua angka 4.",
        options: ["A. 1/36", "B. 2/18", "C. 3/8", "D. 2/36", "E. 4/12"],
        correct: "A"
      },
      {
        question: "20). Suatu delegasi terdiri dari 3 pria dan 3 wanita yang dipilih dari himpunan 5 pria yang berbeda usia dan 5 wanita yang juga berbeda usia. Delegasi itu boleh mencangkup paling banyak hanya satu anggota termuda dari kalangan wanita atau anggota termuda dari kalangan pria. Dengan persyaratan ini, banyak cara menyusun keanggotaan delegasi iini adalah ...?",
        options: ["A. 52", "B. 56", "C. 60", "D. 64", "E. 68"],
        correct: "D"
      },
      {
        question: "21). Sebuah kelas akan memilih 4 putra dan 5 putri untuk menjadi paduan suara. Jumlah siswa di kelas tersebut adalah 20 orang. Jika terdapat 9 orang putra di kelas tersebut, berapakah banyak cara memilih paduan suara dari kelas tersebut!",
        options: ["A. Permutasi", "B. Kombinasi", "C. Siklis", "D. Frekuensi Harapan", "E. Peluang Bersyarat"],
        correct: "B"
      },
      {
        question: "22). Suatu panitia yang terdiri atas 4 orang dengan perincian seorang sebagai ketua, seorang sebagai sekretaris, dan 2 orang sebagai anggota (kedua anggota tidak dibedakan). Akan dipilih dari 3 pria dan 3 wanita yang tersedia. jika sekretarisnya harus wanita, maka banyaknya cara membentuk panitia tersebut adalah ...?",
        options: ["A. 90", "B. 108", "C. 150", "D. 180", "E. 360"],
        correct: "A"
      },
      {
        question: "23). Suatu keluarga yang terdiri atas 6 orang duduk mengelilingi sebuah meja makan yang berbentuk lingkaran. Berapa banyak cara agar mereka dapat duduk mengelilingi meja makan dengan cara yang berbeda?",
        options: ["A. 140", "B. 130", "C. 100", "D. 120", "E. 150"],
        correct: "D"
      },
      {
        question: "24). Sebuah dadu dilemparkan 1 kali dan diketahui mata dadu yang muncul adalah ganjil. Tentukan peluang akan muncul mata dadu yang lebih dari 4.",
        options: ["A. 1/3", "B. 2/3", "C. 3/5", "D. 1/4", "E. 3/2"],
        correct: "A"
      },
      {
        question: "25). Dari tiga huruf A, B, C dan tiga angka 1, 2 dan 3 akan dibuat plat nomor motor yang dimulai dengan satu huruf, diikuti dua angka dan diakhiri dengan satu huruf. Karena khawatir tidak ada yang mau memakai, pembuat nomor tidak di perbolehkan memuat plat nomor yang memakai angka 13. Banyaknya plat nomor yang dapat dibuat adalah ...?",
        options: ["A. 11", "B. 27", "C. 45", "D. 54", "E. 72"],
        correct: "E"
      },
      {
        question: "26). Dari 10 orang siswa yang terdiri 7 orang putra dan 3 orang putri akan dibentuk tim yang beranggotakan 5 orang. Jika disyaratkan anggota tim tersebut paling banyak 2 orang putri, maka banyaknya tim yang dapat dibentuk adalah...?",
        options: ["A. 168", "B. 189", "C. 210", "D. 231", "E. 252"],
        correct: "D"
      },
      {
        question: "27). Rudi pergi ke kamar untuk mengambil 3 jenis buku. Jika di kamarnya terdapat 6 jenis buku, hitung banyaknya kombinasi tiga jenis buku yang mungkin dibawa oleh Rudi ?",
        options: ["A. Permutasi", "B. Kombinasi", "C. Siklis", "D. Frekuensi Harapan", "E. Peluang Bersyarat"],
        correct: "B"
      },
      {
        question: "28). Dari angka-angka 1, 2, 3, 4, 5, 6, 7, 8 akan dibuat bilangan yang terdiri dari 3 angka berbeda. Banyaknya bilangan berbeda yang lebih besar dari 520 tetapi lebih kecil dari 760 adalah...?",
        options: ["A. 120", "B. 108", "C. 90", "D. 84", "E. 72"],
        correct: "B"
      },
      {
        question: "29). Dalam pelemparan sebuah mata dadu, tentukan peluang munculnya mata dadu ganjil atau prima?",
        options: ["A. 2/3", "B. 3/5", "C. 1/2", "D. 4/3", "E. 1/4"],
        correct: "A"
      },
      {
        question: "30). Peluang suatu penerbangan yang telah terjadwal teratur berangkat tepat waktu P(B) = 0,83. Peluang sampai tepat waktu P(S) = 0,82 dan peluang berangkat dan sampai tepat waktu P(B n S) = 0,78. Carilah peluang bahwa pesawat berangkat tepat waktu jika diketahui sampai tepat waktu.",
        options: ["A. 0,95", "B. 0,88", "C. 0,28", "D. 0,33", "E. 0,45"],
        correct: "A"
      },
      {
        question: "31). Dari 2 anak kelas 1, 3 anak kelas 2, dan 4 anak kelas 3 akan dipilih ketua, sekretaris, dan bendahara. Banyak susunan panitia jika kelas asal ketua harus lebih tinggi daripada asal kelas sekretaris dan bendahara adalah...?",
        options: ["A. 60", "B. 70", "C. 86", "D. 100", "E. 99"],
        correct: "C"
      },
      {
        question: "32). Adi, Budi, Ani, dan Ita sedang duduk berjajar. Peluang Budi duduk di sebelah Ita adalah...?",
        options: ["A. 0,25", "B. 0,33", "C. 0,5", "D. 0,67", "E. 0,75"],
        correct: "C"
      },
      {
        question: "33). Peluang kakak nonton film kartun sendiri = 0,65; peluang adik nonton film kartun sendiri adalah 0,80. Peluang kakak atau adik nonton film kartun adalah 0,90. Tentukan peluang kakak nonton film kartun jika adik telah nonton terlebih dahulu.",
        options: ["A. 0,2545", "B. 0,3355", "C. 0,6875", "D. 0,6754", "E. 0,7509"],
        correct: "C"
      },
      {
        question: "34). Setiap tahun, SMA Pelita Bangsa selalu mengadakan pentas seni. Sebelum acara akbar, para siswa mengadakan pemilihan ketua, sekretaris dan bendahara. Setelah melakukan seleksi, ada 5 orang siswa yang mendaftarkan diri. Banyak cara untuk memilih ketua, sekretaris dan bendahara untuk acara tersebut adalah ...?",
        options: ["A. Permutasi", "B. Kombinasi", "C. Siklis", "D. Frekuensi Harapan", "E. Peluang Bersyarat"],
        correct: "A"
      },
      {
        question: "35). Dalam suatu kelas terdiri dari 7 murid perempuan dan juga 3 murid laki-laki. Dari kelas itu kemudian akan dipilih 3 orang murid secara acak. Maka peluang bahwa yang terpilih ketiga-tiganya perempuan yaitu ...?",
        options: ["A. Permutasi", "B. Kombinasi", "C. Siklis", "D. Frekuensi Harapan", "E. Peluang Bersyarat"],
        correct: "B"
      },
      ];
      
      const quizContainer = document.getElementById("quiz");
      const resultsContainer = document.getElementById("results");
      const timer = document.getElementById("time");
      
      let currentQuestion = 0;
      let score = 0;
      let timeRemaining = 1800; // Waktu dalam detik (10 menit)
      
      function startQuiz() {
        displayQuestion();
        startTimer();
      }
      
      function displayQuestion() {
        if (currentQuestion < quizData.length) {
            const questionData = quizData[currentQuestion];
            quizContainer.innerHTML = `
                <p>${questionData.question}</p>
                ${questionData.options.map(option => `
                    <button class="choice-button" onclick="selectOption('${option.charAt(0)}')">${option}</button>
                `).join('')}
            `;
        } else {
            endQuiz();
        }
      }
      
      function startTimer() {
        const interval = setInterval(function() {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            
            if (timeRemaining <= 0) {
                clearInterval(interval);
                endQuiz();
            }
        }, 1000);
      }
      
      function selectOption(selectedOption) {
        if (selectedOption === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        displayQuestion();
      }
      
      function endQuiz() {
        quizContainer.style.display = "none";
        resultsContainer.style.display = "block";
        if (currentQuestion < quizData.length) {
            resultsContainer.innerHTML = `<h2>Waktu habis. Skor Anda: ${score}/${quizData.length}</h2>`;
        } else {
            resultsContainer.innerHTML = `<h2>Skor Anda: ${score}/${quizData.length}</h2>`;
        }
      }
      
      startQuiz();
      