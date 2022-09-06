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
    static articles() {
        return [
            {
                key: 1,
                image: "/assets/images/image-currency.jpg",
                writer: "By Claire Robinson",
                title: "Receive money in any currency with no fees",
                description:
                    "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
            },
            {
                key: 2,
                image: "../assets/images/image-restaurant.jpg",
                writer: "By Wilson Hutton",
                title: "Treat yourself without worrying about money",
                description:
                    "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
            },
            {
                key: 3,
                image: "/assets/images/image-plane.jpg",
                writer: "By Wilson Hutton",
                title: "Take your Easybank card wherever you go",
                description:
                    "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ",
            },
            {
                key: 4,
                image: "/assets/images/image-confetti.jpg",
                writer: "By Claire Robinson",
                title: "Our invite-only Beta accounts are now live!",
                description:
                    "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ",
            },
        ];
    }
    static socialMedia() {
        return [
            { key: 1, image: "/assets/images/icon-facebook.svg" },
            { key: 2, image: "/assets/images/icon-youtube.svg" },
            { key: 3, image: "/assets/images/icon-twitter.svg" },
            { key: 4, image: "/assets/images/icon-pinterest.svg" },
            { key: 5, image: "/assets/images/icon-instagram.svg" },
        ];
    }
    static sectionData() {
        return [
            { key: 1, name: "About Us" },
            { key: 2, name: "Contact" },
            { key: 3, name: "Blog" },
            { key: 4, name: "Careers" },
            { key: 5, name: "Supurt" },
            { key: 6, name: "Privacy Policy" },
        ];
    }
}
