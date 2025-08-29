# DOM Basics (Bangla Notes)

## ১/ DOM Element সিলেকশন

- **getElementById** → শুধু id দিয়েই সিলেক্ট করা যায়। এটা দিয়ে কখনো class সিলেক্ট করা যায় না।
- **getElementsByClassName** → শুধু class দিয়েই সিলেক্ট করা যায়। এটা দিয়ে id সিলেক্ট করা যায় না।
- **querySelector** → এখানে id এবং class দুটোই সিলেক্ট করা যায়। তবে একাধিক এলিমেন্ট থাকলে এটি সবসময় প্রথম child সিলেক্ট করবে।
  - class সিলেক্ট করতে হলে আগে `.` ব্যবহার করতে হয় → যেমন: `.cardBtn`
  - id সিলেক্ট করতে হলে আগে `#` ব্যবহার করতে হয় → যেমন: `#cardBtn`
- **querySelectorAll** → id ও class দুটোই সিলেক্ট করা যায়, এবং একসাথে একাধিক element সিলেক্ট করা সম্ভব।

---

## ২/ নতুন এলিমেন্ট তৈরি ও DOM-এ ইনসার্ট

### HTML
```html
<div id="dynamicContainer"></div>
<button id="divCreatorBtn" class="border rounded p-2">Add+</button>
```

### JavaScript
```javascript
const dynamicContainer = document.getElementById("dynamicContainer");

document
  .getElementById("divCreatorBtn")
  .addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div>I am new element</div>`;
    dynamicContainer.appendChild(newDiv);
});
```


👉 এখন Add+ বাটনে ক্লিক করলে নতুন "I am new element" নামে একটি div তৈরি হবে।

---

## ৩/ Event Bubbling

Event Bubbling বলতে বোঝায়—কোনো একটি element যদি nested অবস্থায় parent–child লেয়ারের মধ্যে থাকে, তখন event প্রথমে inner element থেকে শুরু হয়ে ধাপে ধাপে তার parent node পর্যন্ত propagate হয়।  
অর্থাৎ event উপরের দিকে বুদবুদের মতো ছড়িয়ে যায়।

---

## ৪/ Event Delegation

Event Delegation হলো এমন একটি টেকনিক যেখানে আলাদা আলাদা element-এ লুপ চালিয়ে event listener বসানোর পরিবর্তে, আমরা তাদের common parent element-এ একবারেই listener বসাই।  

- ছোট প্রজেক্টে আলাদা আলাদা ইভেন্ট বসালেও সমস্যা হয় না।  
- কিন্তু অনেক element থাকলে performance খারাপ হয়ে যায়।  
- Event Delegation ব্যবহার করলে ডাইনামিক element-ও সহজে handle করা যায় এবং কোড efficient হয়।

---

## ৫/ preventDefault() বনাম stopPropagation()

- **event.preventDefault()** → কোনো form সাবমিট করলে সাধারণত পুরো পেজ রিলোড হয়। reload বন্ধ করার জন্য preventDefault() ব্যবহার করা হয়। এটি event-এর default কাজ বন্ধ করে।  
- **event.stopPropagation()** → এটি event bubbling/capturing বন্ধ করে দেয়, তবে default action বন্ধ করে না।
