import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import iamge1 from "../../assets/images/home-image/interact-pro-explained-video.jpg";
import webser1 from "../../assets/images/home-image/web-development.jpg";
import webser2 from "../../assets/images/home-image/mobile-app_development.jpg";
import webser3 from "../../assets/images/home-image/web-design.png";
import webser4 from "../../assets/images/home-image/ecomm-development.png";
import webser5 from "../../assets/images/home-image/Webhosting.jpg";
import webser6 from "../../assets/images/home-image/Websitemaintanance.jpg";
import webser7 from "../../assets/images/home-image/Websitecloning.jpg";
import webser8 from "../../assets/images/home-image/logo-.jpg";
import webser9 from "../../assets/images/home-image/UI-UX.jpg";
import webser10 from "../../assets/images/home-image/Flutter-App-Development.png";
import webser11 from "../../assets/images/home-image/Marketing.jpg";
import webser12 from "../../assets/images/home-image/Game-development.png";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const MainCources = () => {
  const theme = useTheme();

  const course = [
    {
      id: 1,
      title: "Web Development",
      img: webser1,
      smallDec:
        "From sleek brochure sites to robust web applications, we craft digital experiences that captivate, convert, and elevate your business.",
      dec: "At JBS Technology, we specialize in delivering cutting-edge web development solutions tailored to meet the unique needs of our clients. Our team of experienced developers and designers work collaboratively to create robust, scalable, and visually appealing websites that enhance user experience and drive business growth.At JBS Technology, we specialize in delivering cutting-edge web development solutions tailored to meet the unique needs of our clients. Our team of experienced developers and designers work collaboratively to create robust, scalable, and visually appealing websites that enhance user experience and drive business growth.",
      secondTitle: "Why Choose Us?",
      details1: [
        "Expertise: Our team has extensive experience in web development, ensuring high-quality, reliable, and innovative solutions.Customization: We offer tailor-made solutions to meet the specific needs of your business.",
        "Support: We provide ongoing support and maintenance to ensure your website remains up-to-date and performs optimally.",
        "Technology: We utilize the latest technologies and frameworks to deliver state-of-the-art web solutions.",
        "Client Satisfaction: Our focus is on building long-term relationships with our clients by delivering exceptional services and exceeding their expectations.",
      ],
      thirdTitle: "Our Services:",
      details2: [
        "Custom Website Development: We build custom websites from scratch, ensuring they are fully aligned with your brand identity and business objectives. Our solutions are tailored to provide a seamless user experience and high performance.",
        "E-commerce Development: Our e-commerce solutions are designed to provide a smooth and secure shopping experience. We integrate advanced features such as payment gateways, shopping carts, product catalogs, and inventory management systems.",
        "Responsive Design: We ensure your website looks and functions perfectly on all devices, including desktops, tablets, and smartphones. Our responsive designs provide an optimal viewing experience, improving user engagement and satisfaction.",
        "Content Management Systems (CMS): We develop websites using popular CMS platforms like WordPress, Joomla, and Drupal, enabling you to manage and update your content easily without any technical expertise.",
        "Single Page Applications (SPA): Utilizing frameworks like React, Angular, and Vue.js, we create SPAs that offer a fast, interactive, and seamless user experience by loading content dynamically without refreshing the entire page.",
        "Web App Development: From simple web applications to complex enterprise solutions, we develop web apps that are scalable, secure, and user-friendly. Our web apps are designed to enhance productivity and streamline business processes.",
        "API Integration: We integrate third-party APIs to enhance the functionality of your website, providing features such as social media integration, payment processing, and data synchronization.",
        "SEO and Performance Optimization: Our team ensures your website is optimized for search engines and performs efficiently, with fast load times and minimal downtime, to improve your online visibility and user experience.",
      ],
      partner:
        "Partner with JBS Technology to transform your web presence and achieve your business goals with our top-notch web development services. Contact us today to discuss your project requirements and get a free quote.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      img: webser2,
      smallDec:
        "Transform your app idea into reality with our expertise. From initial concept to final launch, our specialists develop bespoke applications that address challenges and deliver measurable outcomes.",
      dec: "At JBS Technology, we excel in creating high-performance, feature-rich mobile applications for both Android and iOS platforms. Our dedicated team of developers, designers, and strategists work together to deliver customized mobile solutions that enhance user engagement and drive business success.",
      secondTitle: "Why Choose Us?",
      details1: [
        "Proven Expertise: Our seasoned developers possess a deep understanding of mobile application development, delivering robust, innovative solutions tailored to your needs.",
        "Bespoke Solutions: We provide highly customized app development services that align perfectly with your business goals and user expectations.",
        "Comprehensive Support: Our dedicated support team ensures your mobile app is consistently updated, secure, and functioning at its best, offering prompt assistance whenever needed.",
        "Cutting-Edge Technology: We leverage the latest advancements in mobile technology and frameworks to create modern, efficient, and scalable applications.",
        "Commitment to Excellence: Our priority is to exceed client expectations through unparalleled service and high-quality deliverables, fostering strong, long-lasting partnerships.",
      ],
      thirdTitle: "Our Services:",
      details2: [
        "Custom Mobile App Development: We develop tailor-made mobile applications that are specifically designed to meet your business requirements. Our custom solutions ensure a unique user experience and seamless performance across all devices.",
        "Cross-Platform App Development: Using frameworks like React Native and Flutter, we create cross-platform mobile applications that provide a consistent user experience and functionality on both Android and iOS devices, reducing development time and cost.",
        "Native App Development: Our team specializes in building high-quality native applications using Swift for iOS and Kotlin/Java for Android. Native apps offer superior performance, reliability, and access to the latest platform features.",
        "UI/UX Design: We design intuitive and visually appealing user interfaces that enhance the user experience. Our design process focuses on usability, accessibility, and engagement to ensure your app stands out in the crowded marketplace.",
        "Enterprise Mobile Solutions: We develop enterprise-grade mobile applications that streamline business processes, improve productivity, and facilitate seamless communication within your organization.",
        "App Maintenance and Support: We provide ongoing maintenance and support services to ensure your mobile application remains up-to-date, secure, and performs optimally. Our team is always available to address any issues and implement necessary updates.",
        "Integration Services: We integrate your mobile applications with third-party APIs and services, including payment gateways, social media platforms, and cloud-based solutions, to enhance functionality and user experience.",
        "App Store Optimization (ASO): Our ASO services help improve your app's visibility in the App Store and Google Play, driving more downloads and increasing user engagement.",
      ],
      partner:
        "Partner with JBS Technology to create powerful mobile applications that enhance your business operations and engage your users. Contact us today to discuss your project requirements and get a free quote.",
    },
    {
      id: 3,
      title: "Graphic Design",
      img: webser3,
      smallDec:
        "We collaborate closely with you to comprehend your brand values, target audience, and design preferences, ensuring our solutions align seamlessly with your vision and objectives.",
      dec: "In today's visual world, attention is everything. Masterful graphic design is the key to grabbing eyes, sparking emotions, and leaving a lasting impression. Whether you're building a brand, selling a product, or telling a story, powerful visuals are your silent ambassadors, amplifying your message and influencing hearts and minds.",
      secondTitle: "Benefits",
      details1: [
        "Communicate Clearly: Cut through the noise and convey complex ideas effortlessly with stunning visuals that resonate instantly.",
        "Forge Brand Identity: Craft a unique and memorable aesthetic that embodies your brand values and sets you apart from the competition.",
        "Ignite Engagement: Captivate your audience with creative visuals that inspire curiosity, drive interaction, and build lasting connections.",
        "Boost Conversions: Make your marketing materials irresistibly persuasive, turning browsers into buyers and leads into loyal customers.",
        "Services & Expertise",
        "JBS Technology isn't just a web development company, we're your one-stop shop for visual storytelling. Our team of award-winning designers bring years of experience and passion to every project, delivering impactful solutions that",
        "Logo Design: Craft a timeless emblem that embodies your brand essence and sparks instant recognition.",
        "Website Design & Development: Create a visually stunning and user-friendly website that engages visitors and drives conversions.",
        "Marketing Materials: Elevate your brochures, presentations, and social media with eye-catching graphics that tell your brand story powerfully.",
        "Packaging Design: Make your products stand out on shelves with innovative and memorable packaging that captures attention and drives sales.",
      ],
      thirdTitle: "Why Choose Us?",
      details2: [
        "We collaborate closely to understand your vision and tailor designs that perfectly reflect your brand and goals.",
        "Our diverse portfolio showcases our expertise in various industries and design styles, ensuring we have the perfect fit for you.",
        "We deliver results. Our track record of satisfied clients and successful projects speaks for itself.",
        "Ready to Unleash the Power of Visuals?",
        "Don't settle for the ordinary. Let JBS Technology be your creative partner. Contact us today for a free consultation and discover how compelling graphic design can transform your brand, engage your audience, and ignite your success.",
      ],
    },
    {
      id: 4,
      title: "E-commerce Development",
      img: webser4,
      smallDec:
        "We harness cutting-edge technologies and industry-leading practices to craft e-commerce websites that are visually compelling, user-friendly, and optimized for maximizing conversions.",
      dec: "At JBS Technology, we specialize in creating powerful, scalable, and secure e-commerce solutions that drive online sales and enhance customer satisfaction. Our team of expert developers and designers work together to deliver a seamless shopping experience tailored to your business needs.",
      secondTitle: "Our Services Include:",
      details1: [
        "Custom E-commerce Development: We build bespoke e-commerce websites that are fully customized to reflect your brand identity and meet your specific business requirements. Our solutions are designed to provide an intuitive and engaging user experience.",
        "Platform Integration: We work with leading e-commerce platforms like Shopify, WooCommerce, Magento, and BigCommerce, ensuring seamless integration and optimal performance. Our expertise helps you choose the right platform for your business needs.",
        "Responsive Design: Our e-commerce websites are designed to be fully responsive, providing a consistent and user-friendly shopping experience across all devices, including desktops, tablets, and smartphones.",
        "Shopping Cart and Checkout Solutions: We develop secure and efficient shopping cart and checkout systems that simplify the purchasing process and enhance user convenience, leading to higher conversion rates.",
        "Payment Gateway Integration: We integrate various payment gateways, including PayPal, Stripe, and other popular options, ensuring secure and smooth transactions for your customers.",
        "Inventory Management: Our e-commerce solutions include robust inventory management systems that help you track stock levels, manage orders, and streamline your supply chain operations.",
        "SEO and Digital Marketing: We optimize your e-commerce website for search engines to increase visibility and drive organic traffic. Our digital marketing strategies help you reach a wider audience and boost online sales.",
        "Maintenance and Support: We provide ongoing maintenance and support services to ensure your e-commerce website remains up-to-date, secure, and performs optimally. Our team is always available to address any issues and implement necessary updates.",
        "Marketing Materials: Elevate your brochures, presentations, and social media with eye-catching graphics that tell your brand story powerfully.",
        "Packaging Design: Make your products stand out on shelves with innovative and memorable packaging that captures attention and drives sales.",
      ],
      thirdTitle: "Why Choose Us?",
      details2: [
        "Proven Expertise: Our team has extensive experience in e-commerce development, delivering reliable, innovative, and high-quality solutions tailored to your needs.",
        "Custom Solutions: We offer personalized e-commerce development services that align perfectly with your business goals and customer expectations.",
        "Reliable Support: Our dedicated support team ensures your e-commerce site is consistently updated, secure, and functioning at its best, offering prompt assistance whenever needed.",
        "Cutting-Edge Technology: We leverage the latest technologies and platforms to create modern, efficient, and scalable e-commerce solutions.",
        "Commitment to Excellence: Our priority is to exceed client expectations through unparalleled service and high-quality deliverables, fostering strong, long-lasting partnerships.",
        "Partner with JBS Technology to create a powerful e-commerce platform that enhances your business operations and drives online sales. Contact us today to discuss your project requirements and get a free quote.",
      ],
    },
    {
      id: 5,
      title: "Website Hosting",
      img: webser5,
      smallDec:
        "We specialize in delivering dependable and secure hosting solutions, guaranteeing your website's accessibility and peak performance.",
      dec: "Website hosting is the process of storing and delivering website files to users over the internet. It is a critical part of having a website, as it allows your website to be accessible to visitors.",
      secondTitle: "Benefits of Website Hosting",
      details1: [
        "There are a number of benefits to website hosting, including",
        "Availability: Your website will be available to users 24/7, as long as the hosting provider's servers are up and running.",
        "Scalability: As your website grows in popularity, you can easily scale your hosting plan to accommodate more traffic.",
        "Security: Your website will be protected from security threats by the hosting provider's security measures.",
        "Support: The hosting provider will provide support in case of any problems with your website.",
        "Inventory Management: Our e-commerce solutions include robust inventory management systems that help you track stock levels, manage orders, and streamline your supply chain operations.",
        "SEO and Digital Marketing: We optimize your e-commerce website for search engines to increase visibility and drive organic traffic. Our digital marketing strategies help you reach a wider audience and boost online sales.",
        "Maintenance and Support: We provide ongoing maintenance and support services to ensure your e-commerce website remains up-to-date, secure, and performs optimally. Our team is always available to address any issues and implement necessary updates.",
        "Marketing Materials: Elevate your brochures, presentations, and social media with eye-catching graphics that tell your brand story powerfully.",
        "Packaging Design: Make your products stand out on shelves with innovative and memorable packaging that captures attention and drives sales.",
      ],
      thirdTitle: "How to Choose a Website Hosting Provider",
      details2: [
        "When choosing a website hosting provider, there are a few factors you should consider, including:",
        "Price: Website hosting plans can range in price from a few dollars per month to hundreds of dollars per month.",
        "Features: Different hosting providers offer different features, such as unlimited bandwidth, free SSL certificates, and email accounts.",
        "Reliability: The hosting provider's uptime is important, as you don't want your website to be unavailable to users.",
        "Commitment to Excellence: Our priority is to exceed client expectations through unparalleled service and high-quality deliverables, fostering strong, long-lasting partnerships.",
        "Partner with JBS Technology to create a powerful e-commerce platform that enhances your business operations and drives online sales. Contact us today to discuss your project requirements and get a free quote.",
        "To learn more about website hosting, contact JBS Technology today.",
        "We hope this is helpful. Let us know if you have any other questions.",
      ],
      partner:
        "We are confident that we can help you find the right hosting provider for your needs.",
    },
    {
      id: 6,
      title: "Website maintanance",
      img: webser6,
      smallDec:
        "Our dedicated team of experts specializes in offering comprehensive website maintenance solutions, allowing you to concentrate on your core business while we manage your website's technical requirements.",
      dec: "At JBS Technology, we understand that maintaining a website is as crucial as developing it. Our comprehensive website maintenance services ensure your website remains up-to-date, secure, and performing optimally at all times.",
      secondTitle: "Our Services Include:",
      details1: [
        "Regular Updates: We keep your website's content, plugins, and software up-to-date to ensure it runs smoothly and efficiently.",
        "Security Monitoring: We implement robust security measures and regularly monitor your website to protect it from potential threats and vulnerabilities.",
        "Performance Optimization: Our team continuously monitors and optimizes your website’s speed and performance to provide a seamless user experience.",
        "Backup and Recovery: We perform regular backups and have a recovery plan in place to ensure your data is safe and can be restored in case of any issues.",
        "Bug Fixes and Troubleshooting: Our experts are always on hand to quickly address any issues or bugs that may arise, ensuring minimal downtime.",
        "Content Management: We assist with content updates, ensuring your website remains relevant and engaging to your audience.",
        "Analytics and Reporting: We provide detailed analytics and reports to help you understand your website’s performance and make informed decisions.",
        "Technical Support: Our dedicated support team is available to help you with any technical queries or issues you may encounter.",
      ],
      partner:
        "Partner with JBS Technology for reliable and efficient website maintenance services to keep your online presence strong and effective.",
    },
    {
      id: 7,
      title: "Website Cloning",
      img: webser7,
      smallDec:
        "Our specialized team provides expert website cloning services, meticulously replicating websites to exact specifications while ensuring seamless functionality and fidelity to the original design.",
      dec: "Website cloning is the process of creating a replica of an existing website. This can be done for a variety of reasons, such as testing new features, creating a staging environment, or creating a backup.",
      secondTitle: "Why is Website Cloning Useful?",
      details1: [
        "Website cloning can be useful for a variety of reasons. Here are some of the benefits of website cloning:",
        "Testing new features: You can clone your website to test new features without affecting your live website. This can help you to avoid introducing errors into your live website.",
        "Creating a staging environment: You can clone your website to create a staging environment. This is a separate environment where you can test changes to your website before making them to your live website.",
        "Creating a backup: You can clone your website to create a backup. This can help you to restore your website if it is ever hacked or damaged.",
      ],
      thirdTitle: "How to Get Help with Website Cloning",
      details2: [
        "If you are looking for help with website cloning, then contact JBS Technology. We are a web development company that specializes in website cloning. We can help you clone your website quickly and easily, and we can also help you to create a staging environment or a backup of your website.",
      ],
    },
    {
      id: 8,
      title: "Logo and Brand Identity",
      img: webser8,
      smallDec:
        "Your logo and brand identity are pivotal elements that define your brand's perception and create a lasting impact on your audience.",
      dec: "A logo is a visual representation of a brand. It is often used as a symbol to represent the company or product. Brand identity is the overall image of a brand. It includes the logo, colors, fonts, and other elements that are used to create a consistent look and feel for the brand.",
      secondTitle: "Why is Logo and Brand Identity Important?",
      details1: [
        "Logo and brand identity are important for a number of reasons, including:",
        "Recognisation: A well-designed logo and brand identity can help customers to recognize a brand and remember it.",
        "Trust: A strong brand identity can help to build trust with customers.",
        "Differentiation: A unique logo and brand identity can help a brand to stand out from the competition.",
        "Communication: A well-designed logo and brand identity can communicate the values and message of a brand.",
      ],
      thirdTitle: "How to Create a Logo and Brand Identity",
      details2: [
        "When creating a logo and brand identity, there are a few factors you should consider, including:",
        "Your target audience: Who are you trying to reach with your brand?",
        "Your company's values: What are the values that your company stands for?",
        "Your industry: What are the trends in your industry?",
        "Your budget: How much are you willing to spend on your logo and brand identity?",
        "To learn more about logo and brand identity, contact JBS Technology today.",
        "We hope this is helpful. Let us know if you have any other questions.",
        "We are confident that we can help you create a logo and brand identity that will meet your needs and achieve your goals.",
        "Here are some additional benefits of having a strong logo and brand identity:",
        "Increased brand awareness: A well-designed logo and brand identity can help to increase brand awareness.",
        "Increased sales: A strong brand identity can help to increase sales by making customers more likely to buy from your brand.",
        "Improved customer loyalty: A strong brand identity can help to improve customer loyalty by making customers more likely to do business with your brand again.",
      ],
      partner:
        "If you are not already working on your logo and   brand identity, we encourage you to start today. It is an essential part of any successful brand.",
    },
    {
      id: 9,
      title: "UI / UX design",
      img: webser9,
      smallDec:
        " UI (User Interface) and UX (User Experience) design are fundamental components critical to the success of any digital product.",
      dec: "UI/UX design is the process of designing user interfaces and user experiences. It is a critical part of the development process for any product or service that interacts with users.",
      secondTitle: "Benefits of UI/UX Design",
      details1: [
        "There are a number of benefits to UI/UX design, including:",
        "Increased usability: Well-designed UI/UX can make products and services easier to use, which can lead to increased user satisfaction and engagement.",
        "Improved conversion rates: **Effective UI/UX can help to increase conversion rates by making it easier for users to take desired actions, such as making a purchase or signing up for a service.",
        "Enhanced brand identity: Well-designed UI/UX can help to create a strong brand identity for products and services, which can make them more memorable and appealing to users.",
        "Communication: A well-designed logo and brand identity can communicate the values and message of a brand.",
      ],
      thirdTitle: "How to Get Help with UI/UX Design",
      details2: [
        "If you are considering hiring a UI/UX designer, you can search for a company that specializes in the type of design you need. JBS Technology  is a web development company that also offers UI/UX design services. We can help you create user interfaces and user experiences that are both effective and aesthetically pleasing.",
        "To learn more about UI/UX design, contact JBS Technology today.",
        "We hope this is helpful. Let us know if you have any other questions.",
        "Your industry: What are the trends in your industry?",
        "Your budget: How much are you willing to spend on your logo and brand identity?",
        "To learn more about logo and brand identity, contact JBS Technology today.",
        "We hope this is helpful. Let us know if you have any other questions.",
      ],
      partner:
        "We are confident that we can help you create effective UI/UX designs that will meet your needs and achieve your goals.",
    },
    {
      id: 10,
      title: "Game Development Services",
      img: webser12,
      smallDec:
        " At JBS Technology, we excel in creating engaging, high-quality games that captivate players and deliver immersive experiences. Our team of skilled developers, designers, and artists work collaboratively to bring your game ideas to life, from concept to launch.",
      secondTitle: "Our Services Include:",
      details1: [
        "Custom Game Development: We develop bespoke games tailored to your vision and requirements, ensuring a unique and compelling gaming experience that stands out in the market.",
        "Cross-Platform Game Development: Utilizing advanced frameworks like Unity and Unreal Engine, we create cross-platform games that run smoothly on various devices, including consoles, PCs, and mobile platforms.",
        "2D and 3D Game Development: Our expertise spans both 2D and 3D game development, allowing us to create visually stunning and technically proficient games that engage players and keep them coming back for more.",
        "VR and AR Game Development: We harness the power of virtual reality (VR) and augmented reality (AR) to create immersive and interactive gaming experiences that transport players into new worlds and dimensions.",
        "Multiplayer and Online Game Development: We develop robust multiplayer and online games that offer seamless and enjoyable gameplay experiences, including real-time interaction and competitive features.",
        "Game Design and Art: Our talented designers and artists create captivating game environments, characters, and assets that enhance the visual appeal and storytelling of your game.",
        "Game Testing and QA: We conduct thorough testing and quality assurance to ensure your game is free of bugs, performs optimally, and provides a smooth and enjoyable user experience.",
        "Game Maintenance and Updates: Post-launch, we offer ongoing support, maintenance, and updates to keep your game running smoothly, add new features, and enhance player engagement.",
      ],
      thirdTitle: "Why Choose Us?",
      details2: [
        "Expertise: Our team has extensive experience in game development, ensuring innovative, high-quality, and reliable solutions tailored to your vision.",
        "Customization: We provide personalized game development services that align perfectly with your creative ideas and business goals.",
        "Support: Our dedicated support team ensures your game remains up-to-date, secure, and performs optimally, offering prompt assistance whenever needed.",
        "Technology: We utilize the latest game development tools and technologies to create modern, efficient, and captivating games.",
        "Commitment to Excellence: Our priority is to exceed client expectations through exceptional service and high-quality deliverables, fostering strong, long-lasting partnerships.",
      ],
      partner:
        "Partner with JBS Technology to bring your game ideas to life and create memorable gaming experiences. Contact us today to discuss your project requirements and get a free quote.",
    },
    {
      id: 11,
      title: "Flutter Development Services",
      img: webser11,
      smallDec:
        "At JBS Technology, we harness the power of Flutter to create high-performance, visually appealing mobile applications. Our team of expert developers utilizes Flutter’s capabilities to deliver seamless, cross-platform apps that provide a native-like experience on both Android and iOS devices.",
      secondTitle: "Our Services Include:",
      details1: [
        "Custom Flutter App Development: We develop tailor-made Flutter applications that meet your specific business needs and provide a unique user experience. Our custom solutions ensure your app stands out in the competitive market.",
        "Cross-Platform App Development: Leveraging Flutter’s cross-platform capabilities, we create applications that run smoothly on both Android and iOS, reducing development time and costs while maintaining high-quality performance.",
        "UI/UX Design: Our designers craft intuitive and visually appealing user interfaces that enhance user engagement and satisfaction. We focus on creating a seamless and enjoyable user experience across all devices.",
        "Flutter Consulting: We offer consulting services to help you understand how Flutter can benefit your project, providing insights and recommendations to maximize the potential of your app development.",
        "App Testing and QA: Our thorough testing and quality assurance processes ensure your Flutter app is free of bugs, performs optimally, and delivers a smooth user experience.",
        "App Maintenance and Support: We provide ongoing maintenance and support services to keep your Flutter app up-to-date, secure, and performing at its best. Our team is always available to address any issues and implement necessary updates.",
        "Integration Services: We integrate your Flutter application with third-party APIs and services, enhancing its functionality and providing a richer user experience.",
      ],
      thirdTitle: "Why Choose Us?",
      details2: [
        "Proven Expertise: Benefit from our deep expertise in Flutter development, delivering robust, scalable, and innovative solutions that meet your business objectives.",
        "Tailored Solutions: We specialize in crafting customized Flutter applications that precisely align with your unique requirements and enhance your brand presence.",
        "Dedicated Support: Our committed support team ensures your Flutter app remains updated, secure, and optimized for peak performance, with prompt assistance available whenever you need it.",
        "Advanced Technology: Utilize the latest features and capabilities of Flutter to build modern, efficient, and cross-platform applications that deliver an exceptional user experience.",
        "Client-Centric Approach: We prioritize client satisfaction by consistently delivering superior service and high-quality deliverables, fostering enduring partnerships built on trust and reliability.",
      ],
    },
    {
      id: 9,
      title: "Digital Marketing Services",
      img: webser10,
      smallDec:
        "At JBS Technology, we offer comprehensive digital marketing services designed to maximize your online presence and drive measurable results. Our team of digital marketing experts specializes in developing tailored strategies that align with your business goals and target audience, ensuring optimal engagement and conversion rates.",
      secondTitle: "Our Services Include:",
      details1: [
        "Search Engine Optimization (SEO): We optimize your website to improve organic search visibility and drive qualified traffic, enhancing your online presence and attracting relevant leads.",
        "Pay-Per-Click Advertising (PPC): We create and manage PPC campaigns across platforms like Google Ads and social media channels to drive immediate traffic and conversions, maximizing your ROI.",
        "Social Media Marketing (SMM): We develop and execute social media strategies to increase brand awareness, engagement, and customer loyalty through platforms like Facebook, Instagram, Twitter, and LinkedIn.",
        "Content Marketing: Our content specialists create valuable and relevant content that resonates with your target audience, establishing your brand as an authority in your industry and driving organic growth.",
        "Email Marketing: We design and implement targeted email campaigns to nurture leads, promote products or services, and drive sales, utilizing personalized messaging to enhance customer relationships.",
        "Conversion Rate Optimization (CRO): We analyze user behavior and optimize your website or landing pages to increase conversions, ensuring a seamless user experience and maximizing your marketing efforts.",
        "Digital Analytics and Reporting: We provide insightful analytics and detailed reporting to track key performance indicators (KPIs), measure campaign effectiveness, and make data-driven decisions for continuous improvement.",
      ],
      thirdTitle: "Why Choose Us?",
      details2: [
        "Strategic Expertise: Benefit from our strategic approach to digital marketing, where we combine industry insights with innovative strategies to achieve your business goals effectively.",
        "Customized Solutions: We tailor our digital marketing services to fit your unique needs and objectives, ensuring every campaign is meticulously crafted for maximum impact and ROI.",
        "Dedicated Support: Our team is committed to your success, providing dedicated support and proactive guidance to optimize your digital presence and drive continuous growth.",
        "Proven Track Record: With a proven track record of delivering successful campaigns across various industries, we bring experience and reliability to every project we undertake.",
        "Transparent Communication: We believe in open and transparent communication, keeping you informed every step of the way with clear reporting and actionable insights.",
      ],
    },
  ];

  const navigate = useNavigate();
  const handleButtonClick = (projectId) => {
    navigate(`/detailpage/${projectId}`);
  };

  return (
    <>
      <Box
        mt="40px"
        px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
        sx={{ mt: "40px" }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "600", fontSize: "35px" }}>
            What we do?
          </Typography>
          <Typography variant="body1" my={4}>
            In a rapidly evolving digital landscape, staying ahead requires more
            than just keeping up; it demands innovation. At JBS Technology, we
            harness the latest technologies to empower businesses like yours
            with solutions that redefine possibilities. From bespoke software
            development to scalable cloud solutions, our expertise knows no
            bounds.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {course.map((course) => (
            <Grid item sm={6} lg={3} p={2} key={course.id}>
              <Box
                onClick={() => handleButtonClick(course?.id)}
                sx={{
                  border: `2px dashed ${theme.palette.primary.main}`,
                  padding: 3,
                  borderRadius: 2,
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "primary.main",
                    bgcolor: "#f7fafd",
                    transition: "all 0.5s",
                    marginBottom: 2,
                  }}
                >
                  <img src={course.img} alt="images" />
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  sx={{ marginY: "10px" }}
                >
                  {course.title}
                </Typography>
                <Typography variant="body2">{course.smallDec}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MainCources;
