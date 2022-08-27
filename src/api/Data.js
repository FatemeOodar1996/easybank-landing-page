export default class Data {
    static benefitData() {
        return [
            {
                id: 1,
                image: "../assets/images/iconOnline.svg",
                title: "Online Banking",
                description:
                    "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
            },
            {
                id: 2,
                image: "/assets/images/icon-budgeting.svg",
                title: "Simple Budgeting",
                description:
                    "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
            },
            {
                id: 3,
                image: "/assets/images/icon-onboarding.svg",
                title: "Fast Onboarding",
                description:
                    " We don’t do branches. Open your account in minutes online and start taking control of your finances right away",
            },
            {
                id: 4,
                image: "/assets/images/icon-api.svg",
                title: "Open API",
                description:
                    "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
            },
        ];
    }
    static heroShortStory() {
        return [
            {
                key: 1,
                title: "Next generation digital banking",
                description:
                    "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
            },
        ];
    }
    static benefitShortStory() {
        return [
            {
                title: "Why choose Easybank?",
                description:
                    "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
            },
        ];
    }
}
