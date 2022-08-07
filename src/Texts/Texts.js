import analysis from "../assets/Producst Pics/analysis.png";
import profit from "../assets/Producst Pics/profit.png";
import {
  faUser,
  faTachometerAlt,
  faChartLine,
  faDolly
} from "@fortawesome/free-solid-svg-icons";


function setBoxData(text, title, image) {
  return {
    text,
    title,
    image
  };
}
function setChartValues(header, footer, height) {
  return {
    text: {
      header,
      footer
    },
    height
  };
}
function setDropdownItem(text, icon = "", link) {
  return {
    text,
    icon,
    link
  };
}
function buttonConfig(text, color, type = "button") {
  return {
    text,
    color,
    type
  };
}
function setCheckBoxValues(type, title, checked = false, dependency = "") {
  let inputValue = {
    [title]: {
      type,
      inputConfigs: {
        checked,
        title,
        dependency
      }
    }
  };
  if (!dependency) {
    inputValue[title].value = title;
  }
  return { ...inputValue };
}
function setInputsValues(
  type,
  title,
  icon = null,
  initPlaceholder = "",
  direction = "rtl",
  iconDirection = "left",
  value = "",
  disabled = false
) {
  let inputValue = {
    [title]: {
      type,
      value,
      inputConfigs: {
        icon,
        direction,
        title,
        iconDirection,
        disabled
      }
    }
  };

  if (type === "select") {
    inputValue[title].value = title.selectOptions[0];
    return inputValue[title];
  }
  if (type === "radio") {
    inputValue[title].value = title;
  }

  if (initPlaceholder) {
    let placeholder = initPlaceholder + "...";
    inputValue[title].inputConfigs.placeholder = placeholder;
  }

  return { ...inputValue };
}

const Texts = {
  PageTitle:{
    Dashboard:"داشبورد",
    AdminsChanges:"جداول تغییرات ایجاد شده توسط ادمین ها",
    Statistic:"جدول آمار",
    Profile:"پروفایل",
    ProductsInputs:"ثبت پیشبینی و براورد",
    Products:"محصولات و فروشگاه",
    Management:"مدیریت مدیران",
  },
  Chart: {
    Pie: {
      ...setChartValues(
        "نمودار آمار بازدید کنندگان",
        "میزان بازدیدهای بخش های مختلف سایت نسبت به هم",
        253
      ),
      height: 253
    },
    Area: {
      ...setChartValues(
        "نمودار آمار بازدید کنندگان",
        "میزان بازدید های اخیر نسبت به قبل",
        320
      )
    }
  },
  AdminsChanges: {
    title: "تغییرات اخیر ادمین ها",
    message: {
      highlightedPart: "پنج",
      content: "آپدیت جدید رخ داده است"
    },
    names: ["مهدی", "اسد"],
    events: ["نهاده ها ", "محصولات زراعی"],
    "نهاده ها ": {
      buttonsTexts: [
        buttonConfig("محصولات", "green", "link"),
        buttonConfig("آمار", "green", "link"),
        buttonConfig("تغییرات کلی", "Scooter", "link")
      ]
    },
    "محصولات زراعی": {
      inputValues: {
        ...setInputsValues("radio", "محصولات"),
        ...setInputsValues("radio", "آمار"),
        ...setInputsValues("radio", "تغییرات کلی")
      },
      buttonsTexts: [buttonConfig("تایید آپدیت", "blue", "submit")],
      radiosName: "SecondModalRadios"
    },
    tableData: {
      "محصولات": {
        categories: ["لورم ایپسوم", "لورم ایپسوم2", "لورم ایپسوم3"],
        data: [
          [{ value: "محصول" }, { value: "محصول1" }, { value: "محصول3" }],
          [{ value: "محصول" }, { value: "محصول1" }, { value: "محصول3" }],
          [{ value: "محصول" }, { value: "محصول1" }, { value: "محصول3" }],
          [{ value: "محصول" }, { value: "محصول1" }, { value: "محصول3" }]
        ]
      },
      "آمار": {
        categories: ["لورم ایپسوم", "لورم ایپسوم2", "لورم ایپسوم3"],
        data: [
          [{ value: "آمار" }, { value: "آمار1" }, { value: "آمار3" }],
          [{ value: "آمار" }, { value: "آمار1" }, { value: "آمار3" }],
          [{ value: "آمار" }, { value: "آمار1" }, { value: "آمار3" }]
        ]
      },
      "تغییرات کلی": {
        categories: ["لورم ایپسوم", "لورم ایپسوم2", "لورم ایپسوم3"],
        data: [
          [
            { value: "6666تغییرات کلی" },
            { value: "تغییرات کلی2" },
            { value: "تغییرات کلی3" }
          ],
          [
            { value: "تغییرات کلی" },
            { value: "تغییرات کلی2" },
            { value: "تغییرات کلی3" }
          ]
        ]
      }
    }
  },

  Sidebar: {
    
    title: "داشبورد سایت جامع آمار کشاورزی",
    items: {
      itemsIcon: {
        Dashboard: faTachometerAlt,
        Statistic: faChartLine,
        Products: faDolly,
        Management: faUser
      },
      itemsName: ["داشبورد", "بخش آمار", "محصولات و فروشگاه", "مدیریت مدیران"],
      itemsId: ["Dashboard", "Statistic", "Products", "Management"]
    }
  },
  NavBar: {
    DropdownItems: [setDropdownItem("پروفایل", faUser, "/Profile")]
  },
  Profile: {
    title: "ثبت اطلاعات ادمین",

    inputValues: {
      ...setInputsValues(
        "text",
        "نام",
        null,
        `نام خود را به فارسی وارد نمایید`
      ),
      ...setInputsValues(
        "text",
        "نام خانوادگی",
        null,
        "نام خانوادگی خود را به فارسی وارد نمایید"
      ),
      ...setInputsValues("text", "نام کاربری", "@", "", "ltr"),
      ...setInputsValues("number", "شماره همراه", "+98", "", "ltr"),
      ...setInputsValues(
        "email",
        "آدرس ایمیل",
        "@gmail.com",
        "",
        "ltr",
        "right"
      )
    },
    buttonsTexts: [
      buttonConfig("ثبت اطلاعات", "blue", "submit"),
      buttonConfig("پاک کردن همه", "red", "textCleaner")
    ]
  },
  Table: {
    buttonsTexts: [
      buttonConfig("ویرایش", "blue", "editor"),
      buttonConfig("حذف", "red", "textCleaner")
    ]
  },
  Statistic: {
    title: "نمایش اطلاعات",
    resultText: "نتـــایـــــج",
    categories: ["محصول", "زیر دسته اصلی محصولات", "استان", "شاخص"],

    formSubmitTexts: [buttonConfig(" اضافه کردن ", "green", "submit")],
    inputValues: [
      setInputsValues(
        "select",
        {
          selectTitle: "محصول خود را انتخاب کنید",
          selectOptions: ["غلات", "حبوبات", "علوفه ای", "صنعتی"]
        },
        "انتخاب محصول",
        "",
        "",
        "right"
      ),
      setInputsValues(
        "select",
        {
          selectTitle: "زیر دسته اصلی محصولات خود را انتخاب کنید",
          selectOptions: ["حبوبات آبی", "حبوبات دیم", "علوفه ای", "صنعتی"]
        },
        "انتخاب زیردسته محصولات",
        "",
        "",
        "right"
      ),
      setInputsValues(
        "select",
        {
          selectTitle: "استان مورد نظر خود را انتخاب کنید",
          selectOptions: ["مشهد", "تهران"]
        },
        "انتخاب استان",
        "",
        "",
        "right"
      ),
      setInputsValues(
        "select",
        {
          selectTitle: "شاخص مد نظر خود را انتخاب کنید",
          selectOptions: ["سطح زیر کشت - هکتار", "میزان تولید - تن"]
        },
        "انتخاب شاخص",
        "",
        "",
        "right"
      ),
      setInputsValues("file", " اضافه کردن فایل اکسل ")
    ]
  },
  Products: {
    title: "نمایش محصولات",
    boxes: [
      setBoxData(
        `
      لورم ایپسوم متن ساختگی 
      با تولید سادگی نامفهوم از صنعت چاپ
       و با استفاده از طراحان گرافیک است. 
      در شصت و سه درصد گذشته، حال و آینده `,

        "تحلیل و نخمین",
        analysis
      ),
      setBoxData(
        `
        لورم ایپسوم متن ساختگی با
         تولید سادگی نامفهوم از صنعت چاپ و با
        استفاده از طراحان گرافیک است.
        در شصت و سه درصد گذشته، حال و آینده `,

        "پیشنهاد و براوردها",
        profit
      )
    ]
  },
  ProductsInputs: {
    title: "تغییرات اخیر ادمین ها",
    inputValues: [
      {
        ...setInputsValues("textarea", "توضیحات مختصر"),
        ...setInputsValues("text", "عنوان"),
        ...setInputsValues("textarea", "توضیحات تکمیلی")
      },

      {
        ...setInputsValues("file", "پیوست فایل اصلی"),
        ...setInputsValues("file", " پیوست پیش نمایش")
      },
      {
        ...setCheckBoxValues("checkbox", "رایگان", true, "قیمت"),
        ...setInputsValues("text", "قیمت", null, "قیمت را وارد نمایید")
      }
    ],
    formSubmitTexts: [
      buttonConfig(" ثبت اطلاعات ", "green", "submit"),
      buttonConfig("پاک کردن همه ", "red", "textCleaner")
    ]
  },
  Management: {
    tableCardTitle: "فهرست مدیران",
    title: "اضافه کردن مدیر جدید",
    listTitle: "دسترسی ها",
    categories: [
      "نام ادمین",
      "نام خانوادگی ادمین",
      "نام کاربری ادمین",
      "شماره همراه ادمین",
      "آدرس ایمیل ادمین",
      "دسترسی های ادمین"
    ],
    inputValues: {
      ...setInputsValues(
        "text",
        "نام ادمین",
        null,
        `نام ادمین را به فارسی وارد نمایید`
      ),
      ...setInputsValues(
        "text",
        "نام خانوادگی ادمین",
        null,
        "نام خانوادگی ادمین را به فارسی وارد نمایید"
      ),
      ...setInputsValues("text", "نام کاربری ادمین", "@", "", "ltr"),
      ...setInputsValues("number", "شماره همراه ادمین", "+98", "", "ltr"),
      ...setInputsValues(
        "email",
        "آدرس ایمیل ادمین",
        "@gmail.com",
        "",
        "ltr",
        "right"
      ),
      ...setCheckBoxValues(
        "checkbox",
        "مجاز برای تغییرات در بخش محصولات",
        true
      ),
      ...setCheckBoxValues(
        "checkbox",
        "مجاز برای تغییرات در بخش دسته محصولات",
        true
      ),
      ...setCheckBoxValues("checkbox", "مجاز برای تغییرات در بخش استان", true),
      ...setCheckBoxValues("checkbox", "مجاز برای تغییرات در بخش شاخص", true)
    },
    formSubmitTexts: [
      buttonConfig(" اضافه کن ", "green", "submit"),
      buttonConfig("پاک کردن همه ", "red", "textCleaner")
    ]
  }
};

export const getTextsOf = ({ provider, type }) => {

  if (type) {
  
    return Texts[provider][type];
  }
  return Texts[provider];
};
