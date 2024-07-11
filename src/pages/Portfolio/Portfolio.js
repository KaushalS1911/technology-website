import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import Institute from "../../assets/images/portfolio/admin.png";
import nectarlogo from "../../assets/images/portfolio/Group 1 1.webp";
import project1 from "../../assets/images/portfolio/WARROOM.png";
import stocklogo from "../../assets/images/portfolio/sytock logo.webp";
import project2 from "../../assets/images/portfolio/EASYGOLDFINCOP.png";
import jbs from "../../assets/images/portfolio/jbs-it-institute-logo__1__720.png";
import jbsTech from "../../assets/images/portfolio/jbs-technology-logo_720.png";
import paperlogo from "../../assets/images/portfolio/untitled-1_360.png";
import nectar from "../../assets/images/portfolio/nectar.webp";
import InstituteWebImg from "../../assets/images/portfolio/GirlsFirstFinance.png";
import InstituteAppImg from "../../assets/images/portfolio/institute_app-min.jpg";
import TechnologyImg from "../../assets/images/portfolio/hedger-min.jpg";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    img: Institute,
    title: "Institute Management System",
    description:
      "The Institute Management System (IMS) developed by JBS Technology is a comprehensive CRM solution tailored for educational institutions. This robust platform streamlines administrative tasks, enhances communication, and improves overall efficiency, allowing institutes to focus on delivering quality education.",
    title1: "Key Features",
    des1: [
      {
        title: "Student Management",
        details: [
          "Easy enrollment and registration process.",
          "Detailed student profiles with academic records, attendance, and personal information.",
          "Automated attendance tracking and reporting.",
        ],
      },
      {
        title: "Course Management",
        details: [
          "Simplified course creation and scheduling.",
          "Integration of course materials and resources.",
          "Real-time updates on course progress and student performance.",
        ],
      },
      {
        title: "Faculty Management",
        details: [
          "Detailed faculty profiles with qualifications, schedules, and performance tracking.",
          "Efficient allocation and management of teaching responsibilities.",
          "Faculty feedback and evaluation system.",
        ],
      },
      {
        title: "Communication Tools",
        details: [
          "In-built messaging system for seamless communication between students, faculty, and administration.",
          "Notifications and alerts for important updates and events.",
          "Email and SMS integration for broader outreach.",
        ],
      },
      {
        title: "Finance and Accounting",
        details: [
          "Automated fee collection and management.",
          "Detailed financial reports and analytics.",
          "Secure payment gateway integration.",
        ],
      },
      {
        title: "Library Management",
        details: [
          "Easy cataloging and tracking of library resources.",
          "Online book reservation and lending system.",
          "Detailed inventory and usage reports.",
        ],
      },
      {
        title: "Exam and Result Management",
        details: [
          "Online exam scheduling and management.",
          "Automated grading and result generation.",
          "Detailed performance analytics and reports.",
        ],
      },
      {
        title: "Timetable and Scheduling",
        details: [
          "Automated timetable generation and management.",
          "Real-time updates and conflict resolution.",
          "Integrated calendar for all academic and extracurricular activities.",
        ],
      },
      {
        title: "Data Security and Privacy",
        details: [
          "Robust security measures to protect sensitive data.",
          "Role-based access control to ensure data privacy.",
          "Regular data backups and recovery options.",
        ],
      },
      {
        title: "Customizable Dashboard",
        details: [
          "Intuitive and user-friendly interface.",
          "Customizable widgets and reports.",
          "Real-time analytics and insights.",
        ],
      },
    ],
    title2: "Why Choose Our Admin Panel?",
    des2: [
      "Developed by JBS Technology, a leader in tech solutions, ensuring quality and reliability.",
      "Comprehensive support and regular updates to keep your system up-to-date.",
      "Scalable and flexible to meet the evolving needs of your institution.",
    ],
    buttonVariant: "outlined",
    buttonColor: "#fff",
    buttonBorder: "white",
    buttonBackground: "#fff",
    backgroundColor: "#BB9AB1",
    sectionTextColor: "white",
    images: [{ Institute }, { nectar }],
  },
  {
    id: 2,
    img: InstituteWebImg,
    title: "Girls First Finance",
    description:
      "At Girls First Finance, our mission is to eradicate the sexual exploitation of girls and young women by sugar daddies, teachers, and employers in exchange for tuition fees, passing courses, and jobs. We believe no girl or young woman should be subjected to such exploitation for education, training, jobs, or work experience. We innovate solutions to ensure that all girls and young women can access safe, affordable funding for their tuition, living expenses, or enterprise ideas. Our goal is to make the practice of sugar daddies, sponsors, and sex-for-grades socially unacceptable.",
    title1: "Safe and Affordable Student Loans",
    des1: [
      {
        title: "Loans for Young Women",
        details: [
          "Specifically designed to support education and personal development.",
          "Flexible repayment plans that cater to individual financial situations.",
          "Collaborations with banks, lenders, and impact investors to enhance loan accessibility.",
        ],
      },
      {
        title: "Comprehensive Personal Empowerment",
        details: [
          "Mentorship Programs: Connects young women with mentors for guidance and support in their personal and professional lives.",
          "Counseling Services: Offers professional mental health support and well-being resources.",
          "Safeguarding Support: Provides resources to protect against exploitation and abuse.",
          "Budgeting Tools: Helps young women manage their finances with interactive and easy-to-use tools.",
          "Positive Social Networking: A safe online community for sharing experiences, support, and networking.",
        ],
      },
      {
        title: "Educational and Career Resources",
        details: [
          "Detailed guides and articles on financial literacy and personal finance management.",
          "Workshops and webinars on entrepreneurship, career development, and financial planning.",
          "Resources and tips for academic success, including study guides and effective learning strategies.",
        ],
      },
      {
        title: "Advocacy and Social Change Initiatives",
        details: [
          "Partnering with governments, NGOs, and employers to advocate for policies against sexual exploitation.",
          "Campaigns to raise awareness about the issues of sex-for-grades and similar practices.",
          "Collaborations with advocacy groups to amplify the voices of young women and drive meaningful social change.",
        ],
      },
      {
        title: "Awards and Recognitions",
        details: [
          "Proud double award winner at the Anthem Awards for the report 'Combating the Crisis of Sex for Education and Jobs':",
          "Silver Award in Responsible Technology Research Projects or Publications.",
          "Anthem Community Voice in the Awareness & Media Categories.",
          "Recognized for significant contributions to responsible technology and media awareness.",
        ],
      },
      {
        title: "Strategic Collaborations",
        details: [
          "Working with lenders, banks, impact investors, donors, and governments to scale up solutions and increase access to affordable loans and empowerment opportunities.",
          "Engaging with community advocates and international organizations to broaden the impact and drive global change.",
        ],
      },
    ],
    title2: "Why Choose Girls First Finance?",
    des2: [
      "Developed by JBS Technology, ensuring top-quality design and functionality.",
      "Dedicated to preventing sexual exploitation and empowering young women.",
      "Offers a comprehensive suite of tools and resources for financial independence, personal growth, and career development.",
      "Recognized and awarded for impactful research, advocacy work, and responsible technology initiatives.",
    ],
    buttonVariant: "outlined",
    buttonColor: "#141C25",
    buttonBorder: "#141C25",
    buttonBackground: "#141C25",
    backgroundColor: "#fff",
    sectionTextColor: "#3E3E3E",
  },
  {
    id: 3,
    img: project1,
    title: "War Room Website",
    description:
      "At War Room, we excel in one area: programmatic ads. Our highly specialized ad ops team delivers exceptional ad campaigns that go beyond the capabilities of traditional agencies. Our deep expertise allows us to exceed conversion goals consistently, and we're confident we can achieve the same success for you.",
    title1: "Programmatic Ad Expertise",
    des1: [
      {
        title: "Specialization in Programmatic Advertising",
        details: [
          "Ensuring targeted and efficient ad campaigns.",
          "Advanced techniques and strategies to maximize ad performance and ROI.",
          "Proven track record of exceeding conversion goals across various campaigns.",
        ],
      },
      {
        title: "Highly-Specialized Ad Ops Team",
        details: [
          "A team of trained professionals dedicated to delivering top-notch ad campaigns.",
          "Continuous training and development to stay ahead of industry trends and technologies.",
          "Focused approach to campaign management, ensuring attention to detail and precision.",
        ],
      },
      {
        title: "Comprehensive Campaign Management",
        details: [
          "End-to-end campaign management from planning and strategy to execution and optimization.",
          "Data-driven approach to target the right audience at the right time.",
          "Regular performance monitoring and reporting to ensure transparency and accountability.",
        ],
      },
      {
        title: "Cutting-Edge Technology",
        details: [
          "Utilization of the latest tools and platforms in programmatic advertising.",
          "Integration of AI and machine learning to enhance ad targeting and performance.",
          "Real-time bidding and dynamic ad placements for maximum impact.",
        ],
      },
      {
        title: "Custom Solutions",
        details: [
          "Tailored ad campaigns to meet the specific needs and goals of each client.",
          "Flexibility to adapt strategies based on campaign performance and client feedback.",
          "Dedicated support and collaboration to ensure client satisfaction and success.",
        ],
      },
      {
        title: "Proven Results",
        details: [
          "Showcase of successful campaigns and case studies to demonstrate our expertise.",
          "Testimonials from satisfied clients highlighting the effectiveness of our services.",
          "Detailed analytics and insights to back up our claims of exceeding conversion goals.",
        ],
      },
      {
        title: "Client-Centric Approach",
        details: [
          "Emphasis on understanding client needs and delivering customized solutions.",
          "Transparent communication and regular updates on campaign progress.",
          "Commitment to building long-term partnerships based on trust and results.",
        ],
      },
    ],
    title2: "Why Choose War Room?",
    des2: [
      "Specialization: Focused exclusively on programmatic ads, providing unmatched expertise.",
      "Results-Driven: Proven track record of exceeding conversion goals and delivering high ROI.",
      "Cutting-Edge Technology: Leveraging the latest tools and techniques for optimal ad performance.",
      "Client Satisfaction: Dedicated to understanding and meeting the unique needs of each client.",
    ],
    buttonVariant: "outlined",
    buttonColor: "#fff",
    buttonBorder: "white",
    buttonBackground: "#fff",
    backgroundColor: "#141C25",
    sectionTextColor: "white",
  },
  {
    id: 4,
    img: project2,
    logo: paperlogo,
    title: "Easy Gold Fincorp",
    description:
      "At Easy Gold Fincorp, we are dedicated to providing innovative financial solutions tailored to meet your needs. With a commitment to excellence and customer satisfaction, we deliver reliable services that empower individuals and businesses alike. Our experienced team is here to assist you every step of the way, ensuring transparency, security, and efficiency in all our endeavors. Trust Easy Gold Fincorp for your financial needs and embark on a journey towards prosperity today.",
    title1: "Easy Loan Application Process",
    des1: [
      {
        title: "User-Friendly Online Application",
        details: [
          "User-friendly online application form for quick and easy loan applications.",
          "Instant eligibility checks to help users know their loan status in minutes.",
          "Step-by-step guidance throughout the application process to ensure a seamless experience.",
        ],
      },
      {
        title: "Tailored Financial Solutions",
        details: [
          "Personalized loan offers based on individual financial needs and circumstances.",
          "Flexible loan terms and repayment options to suit various financial situations.",
          "Comprehensive range of financial products including personal loans, business loans, and more.",
        ],
      },
      {
        title: "Secure and Transparent Transactions",
        details: [
          "Advanced security measures to protect user data and ensure safe transactions.",
          "Transparent terms and conditions with no hidden fees or charges.",
          "Real-time tracking of loan application status and repayment schedules.",
        ],
      },
      {
        title: "Customer Support and Assistance",
        details: [
          "Dedicated customer support team available to assist with any queries or concerns.",
          "Extensive FAQ section and resource center to provide users with necessary information.",
          "Regular updates and notifications to keep users informed about their loans and financial products.",
        ],
      },
      {
        title: "Innovative Financial Tools",
        details: [
          "Interactive financial calculators to help users plan their finances and loan repayments.",
          "Budgeting tools and financial planning resources to assist users in managing their money effectively.",
          "Educational content and articles on financial literacy and smart money management.",
        ],
      },
      {
        title: "Commitment to Excellence",
        details: [
          "Experienced team of financial experts providing professional advice and support.",
          "Continuous innovation to improve services and offer the latest financial solutions.",
          "Focus on integrity, reliability, and personalized service to exceed customer expectations.",
        ],
      },
      {
        title: "Empowerment and Community Impact",
        details: [
          "Initiatives to support community development and financial education.",
          "Programs aimed at empowering individuals and businesses to achieve financial success.",
          "Collaboration with local organizations to make a positive impact on the community.",
        ],
      },
    ],
    title2: "Mission",
    des2: [
      "Our mission at Easy Gold Fincorp is to empower individuals and businesses alike with tailored financial solutions that inspire confidence and drive success. With a dedication to integrity, innovation, and personalized service, we strive to exceed expectations and make a positive impact on the lives of our clients and communities. Through transparency, reliability, and a commitment to excellence, we aim to be the trusted partner you can rely on for all your financial needs, today and in the future.",
    ],
    title3: "Vision",
    des3: [
      "Our vision at Easy Gold Fincorp is to revolutionize the financial landscape by providing accessible, innovative, and sustainable solutions that empower individuals and businesses to thrive.",
    ],
    title4: "Why Choose Easy Gold Fincorp?",
    des4: [
      "Personalized Service: Tailored financial solutions to meet individual needs and goals.",
      "Security and Transparency: Safe, transparent transactions with no hidden fees.",
      "Expert Support: Dedicated team of financial experts to guide you every step of the way.",
      "Innovation: Continuous improvement and innovation to offer the latest financial solutions.",
      "Community Impact: Commitment to empowering individuals and making a positive community impact.",
    ],
    buttonVariant: "outlined",
    buttonColor: "#141C25",
    buttonBorder: "#141C25",
    buttonBackground: "#141C25",
    backgroundColor: "#fff",
    sectionTextColor: "#3E3E3E",
  },
  {
    id: 5,
    img: TechnologyImg,
    logo: jbsTech,
    title: "Hedger Community Website",
    description:
      "Hedger Community is your go-to platform for all things related to the stock market. Whether you're a seasoned investor or a beginner, our website provides the resources, tools, and community support you need to navigate the stock market with confidence. At Hedger Community, we aim to empower our users with comprehensive information, real-time updates, and expert insights to help you make informed investment decisions.",
    title1: "Stock Market Insights",
    des1: [
      {
        title: "Real-Time Stock Market Updates",
        details: [
          "Real-time stock market updates and news to keep you informed about market trends and movements.",
          "In-depth analysis and reports on various stocks, sectors, and market indices.",
          "Expert opinions and commentary on market conditions and investment opportunities.",
        ],
      },
      {
        title: "Investment Tools",
        details: [
          "Advanced stock screeners and filters to help you find investment opportunities that match your criteria.",
          "Interactive charts and technical analysis tools for detailed stock analysis.",
          "Portfolio tracking tools to monitor and manage your investments in real-time.",
        ],
      },
      {
        title: "Educational Resources",
        details: [
          "Comprehensive guides and tutorials on stock market basics, investment strategies, and financial planning.",
          "Video tutorials and webinars conducted by stock market experts and experienced investors.",
          "Glossary of stock market terms to help users understand complex financial jargon.",
        ],
      },
      {
        title: "Community Support",
        details: [
          "Discussion forums and community groups where members can share insights, ask questions, and discuss investment strategies.",
          "Peer-to-peer mentoring and support to help beginners learn from experienced investors.",
          "Regular community events, webinars, and Q&A sessions with industry experts.",
        ],
      },
      {
        title: "Personalized Recommendations",
        details: [
          "Customized stock recommendations based on user preferences and investment goals.",
          "Alerts and notifications for significant market events, stock price changes, and investment opportunities.",
          "Personalized investment plans and advice to help users achieve their financial objectives.",
        ],
      },
      {
        title: "Data and Research",
        details: [
          "Access to extensive databases of historical stock prices, financial statements, and market data.",
          "Research reports and whitepapers on emerging market trends and investment themes.",
          "Proprietary market indicators and algorithms to identify potential investment opportunities.",
        ],
      },
      {
        title: "User-Friendly Interface",
        details: [
          "Intuitive and easy-to-navigate website design for a seamless user experience.",
          "Mobile-friendly platform for access on-the-go.",
          "Customizable dashboards to display the information and tools most relevant to the user.",
        ],
      },
      {
        title: "Security and Privacy",
        details: [
          "Advanced security measures to protect user data and ensure safe transactions.",
          "Privacy policies that prioritize user confidentiality and data protection.",
          "Regular security audits and updates to maintain a secure platform.",
        ],
      },
    ],
    title2: "Why Choose Hedger Community?",
    des2: [
      "Comprehensive Resources: Everything you need to know about the stock market in one place.",
      "Expert Insights: Access to professional analysis and market commentary.",
      "Community Support: Connect with fellow investors and share knowledge.",
      "Personalized Experience: Customized tools and recommendations tailored to your investment goals.",
      "User-Friendly: Intuitive design and mobile accessibility for a seamless experience.",
    ],
    buttonVariant: "outlined",
    buttonColor: "#e5e5e5",
    buttonBorder: "#dcdcdc",
    buttonBackground: "#e8e8e8",
    backgroundColor: "#758694",
    sectionTextColor: "#e7e7e7",
  },
];
const Portfolio = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Box bgcolor={theme.palette.backgroundLiteGrey} sx={{ mt: "40px" }}>
        <Box
          sx={{ width: "100%" }}
          px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
        >
          <Grid>
            <Grid item lg={9} xs={11} sx={{ py: { xs: 8, md: 13 } }}>
              <Box
                className="heading"
                sx={{ fontSize: { md: "48px", xs: "32px" } }}
              >
                <Typography variant="div" fontWeight="bold">
                  We take digital experience to the <br />
                  <Typography variant="span" color={theme.palette.primary.main}>
                    next level
                  </Typography>
                </Typography>
              </Box>
              <Box className="service_paragraph" sx={{ my: "15px" }}>
                <Typography>
                  The products we build are changing the way industry leaders do
                  their core business
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {portfolioItems?.map((item, index) => (
        <Box
          key={item.id}
          bgcolor={item.backgroundColor}
          color={item.sectionTextColor}
        >
          <Container maxWidth="lg">
            <Box sx={{ py: "35px" }}>
              <Grid container alignItems="center" spacing={5}>
                {index % 2 === 0 && (
                  <Grid
                    item
                    sx={{ order: { md: 0 } }}
                    xs={12}
                    md={6}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { sm: "65%", md: "100%" },
                      }}
                    >
                      <img src={item.img} alt={item.title} />
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12} md={6} sx={{ order: { md: 0, xs: 1 } }}>
                  <Box
                    sx={{
                      width: {
                        md: "270px",
                        xs: "200px",
                      },
                    }}
                  >
                    {/* <img src={item.logo} alt="logo" /> */}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { md: "42px", xs: "32px" },
                      fontWeight: "600",
                      marginTop: "15px",
                      letterSpacing: "1.2px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: "20px",
                      lineHeight: "1.7",
                      fontWeight: "500",
                      letterSpacing: "0.6px",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    variant={item.buttonVariant}
                    sx={{
                      mt: 3,
                      mb: 5,
                      borderRadius: "30px",
                      fontWeight: "600",
                      padding: "16px 58px",
                      borderColor: item.buttonBorder,
                      color: item.buttonColor,
                      backgroundColor: item.backgroundColor,
                      "&:hover": {
                        backgroundColor: item.buttonBackground,
                        borderColor: item.buttonBorder,
                        color: item.backgroundColor,
                      },
                    }}
                    onClick={() =>
                      navigate(`/portfolio/single-project/${item.id}`)
                    }
                  >
                    View more
                  </Button>
                </Grid>
                {index % 2 !== 0 && (
                  <Grid
                    item
                    sx={{ order: { md: 0 } }}
                    xs={12}
                    md={6}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { sm: "65%", md: "100%" },
                      }}
                    >
                      <img src={item.img} alt={item.title} />
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Container>
        </Box>
      ))}
    </>
  );
};

export { portfolioItems };
export default Portfolio;
