// header footer apply dynamically
var supportBtn = document.getElementById("supportBtn");
var foatingButtons = document.getElementById("foatingButtons")
var whatsAppBtnfloat = document.getElementById("whatsAppBtnContainer");
supportBtn?.addEventListener("click", function() {
    foatingButtons.classList.toggle("foatingButtonsDisable")
})
whatsAppBtnfloat?.addEventListener("click", () => {
    window?.open(
        "https://api.whatsapp.com/send?phone=918527297692&text=Hey%20I%20am%20interested%20in%20WhatsApp%20Business%20Solution"
    );
})
fetch("header.html")
    .then((response) => {
        // Check if the response status is successful
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then((content) => {
        // Inject the content into the header-container
        document.getElementById("header-container").innerHTML = content;

        // js for hamburger menu start here

        const hamBtn = document.querySelector(".bars");
        const nav = document.querySelector(".navigation-content");

        hamBtn.addEventListener("click", () => {
            hamBtn.classList.toggle("ham");
            nav.classList.toggle("show-nav");
        });
    })
    .catch((error) => {
        // Handle any errors that occurred during fetch or parsing
        console.error("Error fetching header:", error);
        // Optionally, you can display an error message on the page:
        document.getElementById("header-container").innerHTML =
            "Error loading header";
    });

fetch("footer.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then((content) => {
        document.getElementById("footer-container").innerHTML = content;

        // talk to sales popup form start here

        const heroBtn = document.querySelectorAll(".hero-btn1");
        const popUp = document.querySelector(".popup");
        const closePopUp = document.querySelector(".popup-closebtn");
        const becomePartnerBtn = document.querySelector(".become-partner");
        const becomePartnerText = document.querySelector(".popup-text");
        const talkToSalesBtn = document.querySelectorAll(".talk-to-sales");

        heroBtn.forEach((item) => {
            item.addEventListener("click", () => {
                handleLeadForm.reset();
                popUp.classList.add("show-popup");
                // becomePartnerText.innerHTML = item.innerHTML;
                document.getElementById("name-err").innerHTML = "";
                document.getElementById("number-err").innerHTML = "";
                document.getElementById("email-err").innerHTML = "";
                document.getElementById("captcha-err").innerHTML = "";
                // Refresh captcha
                userText.value = "";
                let refreshArr = [];
                for (let j = 1; j <= 4; j++) {
                    refreshArr.push(
                        alphaNums[Math.floor(Math.random() * alphaNums.length)]
                    );
                }
                captchaText.innerHTML = refreshArr.join("");
                output.innerHTML = "";
            });
        });


        closePopUp.addEventListener("click", () => {
            handleLeadForm.reset();
            document.getElementById("name-err").innerHTML = "";
            document.getElementById("number-err").innerHTML = "";
            document.getElementById("email-err").innerHTML = "";
            document.getElementById("captcha-err").innerHTML = "";
            popUp.classList.remove("show-popup");
            // Refresh captcha
            userText.value = "";
            let refreshArr = [];
            for (let j = 1; j <= 4; j++) {
                refreshArr.push(
                    alphaNums[Math.floor(Math.random() * alphaNums.length)]
                );
            }
            captchaText.innerHTML = refreshArr.join("");
            output.innerHTML = "";
        });
    })
    .catch((error) => {
        console.error("Error fetching footer:", error);
        document.getElementById("footer-container").innerHTML =
            "Error loading footer";
    });

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// Code for captcha and form validation start here

var handleLeadForm = document.getElementById("leadForm");
var successForm = document.getElementById("success");
const popUp = document.querySelector(".popup");

let captchaText = document.getElementById("captchaNew");
let userText = document.getElementById("textBoxCapcha");
let submitButton = document.getElementById("submit");
let output = document.getElementById("output");
let refreshButton = document.getElementById("refresh");

let alphaNums = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
let emptyArr = [];
for (let i = 1; i <= 4; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join("");

refreshButton.addEventListener("click", function() {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 4; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    captchaText.innerHTML = refreshArr.join("");
    output.innerHTML = "";
});
successForm.style.display = "none";
handleLeadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let nameValue = e.target.name.value;
    let numberValue = e.target.number.value;
    let emailValue = e.target.email.value;

    let data = {
        company_name: nameValue,
        mobile_number: numberValue,
        company_email: emailValue,
        source: "Website",
    };

    if (nameValue == "") {
        document.getElementById("name-err").innerHTML = "Please fill name";
        return false;
    } else {
        document.getElementById("name-err").innerHTML = "";
    }
    if (!isNaN(nameValue)) {
        document.getElementById("name-err").innerHTML =
            "Please fill character name only";
        return false;
    } else {
        document.getElementById("name-err").innerHTML = "";
    }
    if (numberValue == "") {
        document.getElementById("number-err").innerHTML = "Please fill number";
        return false;
    } else {
        document.getElementById("number-err").innerHTML = "";
    }

    if (isNaN(numberValue)) {
        document.getElementById("number-err").innerHTML = "Please fill number only";
        return false;
    } else {
        document.getElementById("number-err").innerHTML = "";
    }

    if (numberValue.length != 10) {
        document.getElementById("number-err").innerHTML =
            "Please fill 10 digits number only";
        return false;
    } else {
        document.getElementById("number-err").innerHTML = "";
    }
    if (
        numberValue.charAt(0) != 9 &&
        numberValue.charAt(0) != 8 &&
        numberValue.charAt != 7 &&
        numberValue.charAt(0) != 6
    ) {
        document.getElementById("number-err").innerHTML =
            "Please fill user number start from 9,8,7 and 6 only";
        return false;
    } else {
        document.getElementById("number-err").innerHTML = "";
    }

    if (emailValue == "") {
        document.getElementById("email-err").innerHTML = "Please fill email id";
        return false;
    } else {
        document.getElementById("email-err").innerHTML = "";
    }
    if (emailValue.indexOf("@") <= 0) {
        document.getElementById("email-err").innerHTML = "@ invalid position";
        return false;
    } else {
        document.getElementById("email-err").innerHTML = "";
    }

    if (
        emailValue.charAt(emailValue.length - 4) != "." &&
        emailValue.charAt(emailValue.length - 3) != "."
    ) {
        document.getElementById("email-err").innerHTML = "@ invalid position";
        return false;
    } else {
        document.getElementById("email-err").innerHTML = "";
    }

    if (userText.value !== captchaText.innerHTML) {
        document.getElementById("captcha-err").innerHTML = "Incorrect Captcha";
        // Refresh captcha
        userText.value = "";
        let refreshArr = [];
        for (let j = 1; j <= 4; j++) {
            refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        }
        captchaText.innerHTML = refreshArr.join("");
        output.innerHTML = "";

        return false;
    } else {
        document.getElementById("captcha-err").innerHTML = "";
    }
    if (
        userText.value === captchaText.innerHTML &&
        nameValue !== "" &&
        numberValue !== "" &&
        emailValue !== ""
    ) {
        submitButton.innerHTML = "Please Wait...";
        fetch("https://chatsense.in/MyApp/post_leads/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    submitButton.innerHTML = "Data Submitted Successfully";
                    handleLeadForm.style.display = "none";
                    successForm.style.display = "block";
                    handleLeadForm.reset();
                }, 1000);
                setTimeout(() => {
                    submitButton.innerHTML = "Submit";
                    popUp.classList.remove("show-popup");
                }, 3000);

                // console.log(data);
            })
            .catch((err) => {
                // console.log(err);
                submitButton.innerHTML = "Please try again";

                userText.value = "";
                let refreshArr = [];
                for (let j = 1; j <= 4; j++) {
                    refreshArr.push(
                        alphaNums[Math.floor(Math.random() * alphaNums.length)]
                    );
                }
                captchaText.innerHTML = refreshArr.join("");
                output.innerHTML = "";
            });
    }
    setTimeout(() => {
        document.getElementById("fixed2").classList.remove("f");
        document.getElementById("name-err").innerHTML = "";
        document.getElementById("number-err").innerHTML = "";
        document.getElementById("email-err").innerHTML = "";
        document.getElementById("captcha-err").innerHTML = "";
        handleLeadForm.reset();
        handleLeadForm.style.display = "block";
        successForm.style.display = "none";
    }, 4000);
});

//pricing price toggle

const change = document.getElementById("pricing_input");
change ?.addEventListener("click", (e) => {
    var i = e.target.checked;
    if (i == true) {
        getPricingDataFromLocalStorage(365);
    } else {
        getPricingDataFromLocalStorage(31);
    }
});

// Custom price data
const features = [{
        feature_name: "Customize number of members",
        feature_description: "",
    },
    {
        feature_name: "Unlock all features",
        feature_description: "",
    },
    {
        feature_name: "High Speed messaging",
        feature_description: "",
    },
    {
        feature_name: "Customizable services",
        feature_description: "",
    },
    {
        feature_name: "High Security",
        feature_description: "",
    },
    {
        feature_name: "Work flow for automation",
        feature_description: "",
    },
];
const customPlanData = {
    name: "Enterprise",
    plan_type: "CST",
    price: "X",
    features: JSON?.stringify(features),
    member_number: "",
    module_permission: "",
    description: "To make higher broadcasting and smoother customer interaction on WhatsApp",
    yearly_discount: "",
    is_custom: true,
    package_type: "Premium",
    company_name: null,
    unit_price: "",
    plan_duration: {
        id: "b4f09f98-3c99-44a9-8e89-1e35c6536ad2",
        name: "Yearly",
        month: 12,
        days: "",
        created_at: "2023-11-02T00:05:44+05:30",
    },
};
//  Dynamic pricing data
document.getElementById("mainPricingContainer").innerHTML =
    "Please wait, Pricing list is loading...";
document.addEventListener("DOMContentLoaded", function() {

    pricingCards();
});
const pricingCards = () => {
    fetch('https://chatsense.in/MyApp/All_plan/')
        // fetch("http://192.168.114.212:8000/All_plan/")
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("pricingData", JSON.stringify(data));
            document.getElementById("mainPricingContainer").innerHTML =
                "Please wait, Pricing list is loading...";
            setTimeout(() => {
                getPricingDataFromLocalStorage(365);
            }, 1000);
        })
        .catch((error) => {
            document.getElementById("mainPricingContainer").innerHTML =
                "Data Not Available";
        });
};


const getPricingDataFromLocalStorage = (days) => {
    const stringData = localStorage ?.getItem("pricingData");
    const data = JSON ?.parse(stringData);
    const yearlyFilteredData = data ?.data ?.filter(
        (item) => item ?.plan_type === "CST" && item ?.plan_duration ?.days === 365
    );
    const monthlyFilteredData = data?.data?.filter(
        (item) => item ?.plan_type === "CST" && item ?.plan_duration ?.days === 31
    );
    const toggledData = days === 365 ? yearlyFilteredData : monthlyFilteredData;
    toggledData?.push(customPlanData);

    document.getElementById("mainPricingContainer").innerHTML = toggledData 
    ?.map((item) => {
            let callFunction = "";
            let forId = "";
            let link = "href = 'https://app.chatsense.in/register'";
            let buttonText = "Start Free Trial"; // Default button text
            let backgroundImage = "";
            let btnBackGround = "";
            let color = "";
            let customDisplay = "block";
            let customImage = "";
            if (item.package_type === "Basic") {
                backgroundImage =
                    "background-image: linear-gradient(#fa7604, #fa7604);";
                btnBackGround = "background-color: #fa7604;";
                color = "faBtnBasic";
                customDisplay = "block"
            } else if (item ?.package_type === "Advance") {
                backgroundImage =
                    "background-image: linear-gradient(#339d4e, #339d4e);";
                btnBackGround = "background-color: #339d4e;";
                color = "faBtnAdvance";
                customDisplay = "block"
            } else {
                backgroundImage =
                    "background-image: linear-gradient(#598ce9, #3477f5);";
                btnBackGround = "background-color: #3477f5;";
                color = "faBtnPremium";
                customDisplay = "none"
                customImage = '<img style="height: 80px; margin-bottom: 10px;" src="./images/planning.png" alt="Custom Plan">'
            }
            let price = +item ?.price - (+item ?.price * +item ?.yearly_discount) / 100;
            // console.log(item);
            return `
              <div class="plan-container" id="${item?.id}">
              <div class="box1">
              <div style="${item?.package_type === "Advance" ? "display: flex;" : "display: none;"}" class="popular">Most Popular</div>
                  <div style = "${backgroundImage} height: 142px" class="box1child about-text-color-pricing">
                    <p class="pricing-heading about-text-color-pricing">${
                      item?.name
                    }</p>
                    ${customImage}
                    <div style="display: ${customDisplay}" class="h1"><span style="font-size: 28px;">&#8377; </span><span id="h1"> ${
                      price ? Math.ceil(price) : ''
                    } </span><span style="font-size: 16px"> /M</span></div>
                    <p style="display: ${customDisplay}" class="box1-text">${
                      days === 365
                        ? (price ? Math.ceil(price * 12) + " " : "") +
                          "Charge Annually"
                        : (price ? Math.ceil(price) + " " : "") +
                          "Charge Monthly"
                    }</p>
                  </div>
                  <div class="img1">
                    <img src="./images/cloud.svg" alt="">
                  </div>
                  <div class="box2">
                  <p class="pricing-desc ${color}" >${item?.description}</p>
                  <div class="a">
                      <a ${forId} ${link} ${callFunction} target="_blank" data-item-id="${
        item?.id
      }" style="color: #FFFFFF; cursor: pointer; ${btnBackGround}">${buttonText}</a>
                    </div>
                    <div class="text1">
                      ${JSON?.parse(item?.features)
                        ?.map((featureItem, i) => {
                          return `<p style="display: flex; gap: 5px; align-items: start;"><i class="fas fa-check-circle ${color}"></i><span>${featureItem?.feature_name}</span></p>`;
                        })
                        .join("")}
                    </div>
                    
                  </div>
                </div>
              </div>
            `;
        })
        .join("");
};


function callingForm() {
    const heroButton = document.getElementById("hero-btn2");
    const popUp = document.querySelector(".popup");
    const pricingPartnerText = document.querySelector(".popup-text");
    const newFormField = document.getElementById("teamNumber");
    const closeButton = document.querySelector(".popup-closebtn");
    popUp.classList.add("show-popup");
    handleLeadForm.reset();
    pricingPartnerText.innerHTML = heroButton.innerText;
    newFormField.style.display = "block";
    closeButton.addEventListener("click", () => {
        newFormField.style.display = "none";
    });
}


var elem = document.getElementsByClassName("nav-links")
// elem?.map((item) => console.log(item?.outerHTML))
// console.log(elem[0]);
// js for faq page start here
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementsByClassName("nav-links");

    // Check if there are elements with the specified class
    if (elem.length > 0) {
        // console.log(elem[0].outerHTML);
    } else {
        // console.log('No elements found with the specified class.');
    }
});