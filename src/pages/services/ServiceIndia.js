import React, {useState} from 'react';
import {Grid, Typography, Box, List, ListItem, ListItemText, Container} from '@mui/material';

const ServicesIndia = () => {
    const services = [
        'Custom Software Development',
        'Mobile App Development',
        'Web Development',
        'UI/UX & Graphic Design',
        'Cloud & DevOps Services',
        'Managed IT Services',
        'E-commerce web Development',
        'Offshore development',
        'On-demand app development',
        'Hire .Net Developers',
        'QA & Testing Services',
    ];

    const serviceDetails = {
        'Custom Software Development': 'Custom software development creates tailored solutions to meet specific business needs, ensuring efficiency, scalability, and innovation. It offers seamless integration, enhanced security, and long-term adaptability, providing a competitive edge and supporting sustainable growth.',
        'Mobile App Development': '\n' +
            '\n' +
            'Mobile app development involves creating software for mobile devices like smartphones and tablets, focusing on performance, user-friendly design, and functionality for platforms like Android and iOS. It enables businesses to connect with users, drive engagement, and support growth. From concept to deployment, custom apps are tailored to business goals, offering responsive designs, real-time features, scalability, and security.',
        'Web Development': '\n' +
            'Web development creates and maintains responsive, user-friendly websites using modern technologies. It ensures strong online presence, seamless functionality, and integration with tools to support business growth and engagement.',
        'UI/UX & Graphic Design': 'UI/UX and graphic design combine creativity and functionality to craft visually appealing, user-friendly digital experiences. UI focuses on aesthetics and brand alignment, while UX ensures seamless, engaging interactions. Graphic design enhances communication through visuals like logos, marketing materials, and social media graphics. Modern design prioritizes user behavior, accessibility, and cross-platform compatibility, delivering impactful and scalable solutions for today’s tech-savvy audiences.',
        'Cloud & DevOps Services': 'Cloud and DevOps services empower businesses to optimize IT infrastructure, streamline development, and accelerate delivery. Cloud platforms like AWS, Azure, and Google Cloud offer scalable, cost-efficient solutions with robust security. DevOps fosters collaboration, automation, and continuous improvement through CI/CD pipelines and tools like Docker and Kubernetes. Together, they enable rapid innovation, agility, and reliable performance, helping businesses modernize IT processes and stay competitive in the digital age.',
        'Managed IT Services': 'Managed IT Services offer businesses proactive IT support, ensuring efficient, secure, and up-to-date technology infrastructure. These services include system monitoring, troubleshooting, cybersecurity, disaster recovery, and compliance management, all tailored to business needs. By outsourcing IT management, businesses reduce costs, improve uptime, and enhance efficiency, allowing them to focus on core operations while minimizing risks and downtime.',
        'E-commerce web Development': 'E-commerce web development creates user-friendly online platforms for businesses to showcase products, facilitate transactions, and enhance customer experiences. It includes secure payment gateways, inventory management, and mobile-friendly designs. Integration with AI, chatbots, and analytics improves personalization and support, while scalability, security, and SEO ensure growth and customer safety. These platforms help businesses reach global audiences, boost sales, and build brand loyalty.',
        'Offshore development': 'Offshore development involves outsourcing software projects to skilled teams in other countries, offering businesses access to global talent, reduced costs, and faster delivery. It allows companies to focus on core competencies while leveraging expertise in advanced technologies. This model is ideal for startups, SMEs, and enterprises, providing flexibility, scalability, and cost-efficiency, with key factors like security, communication, and collaboration tools ensuring successful outcomes.',
        'On-demand app development': 'On-demand app development creates platforms for instant access to services, enhancing industries like transportation and e-commerce. These apps offer features like geolocation, secure payments, and real-time notifications, improving customer satisfaction, efficiency, and revenue. They use technologies like AI and cloud computing for scalability and security.',
        'Hire .Net Developers': 'Hiring .NET developers allows businesses to build robust, scalable, and secure software solutions using the versatile .NET framework. Skilled developers create dynamic web applications, APIs, and enterprise solutions, leveraging technologies like C#, VB.NET, ASP.NET, Microsoft Azure, and SQL Server to deliver high-performance, customized applications.',
        'QA & Testing Services': 'QA & Testing Services ensure software quality by identifying issues early, covering functional, performance, security, and usability testing. Using advanced tools and agile practices, these services improve efficiency, reduce costs, and enhance customer satisfaction.',
    };

    const serviceDetails2 = {
        'Custom Software Development': '\n' +
            'Custom software development creates and maintains software tailored to specific business needs, offering personalized solutions for unique tasks and workflows.',
        'Mobile App Development': 'Mobile app development creates tailored software for devices like smartphones, tablets, and wearables, helping businesses connect with customers, boost efficiency, and stay competitive. It delivers fast, intuitive, and seamless solutions for platforms like Android and iOS.',
        'Web Development': 'Our web development services deliver dynamic, scalable, and high-performing solutions tailored to your brand and business goals. From SPAs to feature-rich portals, we offer responsive design, cloud integration, and ongoing maintenance to help businesses thrive in the digital age.',
        'UI/UX & Graphic Design': 'We provide exceptional UI/UX and graphic design services, creating functional and engaging designs that enhance usability and strengthen brand identity. From websites to mobile apps and marketing materials, we help businesses elevate their digital presence and leave a lasting impression.',
        'Cloud & DevOps Services': '\n' +
            'Our Cloud & DevOps services optimize cloud computing and development workflows, providing scalable architectures, automated provisioning, and enhanced collaboration. We focus on security, scalability, and efficiency to help businesses innovate, reduce costs, and deliver superior products.',
        'Managed IT Services': 'Our Managed IT Services provide customized solutions to enhance efficiency, security, and business growth. From IT management to cloud services and helpdesk support, we ensure your IT environment runs smoothly, enabling confident operation in the digital landscape.',
        'E-commerce web Development': '\n' +
            'Our e-commerce web development services help businesses build a strong online presence and achieve sales goals. We design appealing storefronts, implement advanced features, and provide ongoing support to ensure a secure, high-performing shopping experience that drives growth and maximizes ROI.',
        'Offshore development': 'Our offshore development services provide dedicated teams with specialized skills to deliver tailored solutions, including end-to-end development and expertise in areas like AI, blockchain, and DevOps. We offer reliable, cost-effective solutions to help you achieve your business goals.',
        'On-demand app development': '\n' +
            'Our on-demand app development services help businesses turn ideas into reality, offering customizable, scalable solutions from design to post-launch support. We create high-performing apps that connect businesses with customers anytime, anywhere.',
        'Hire .Net Developers': 'Our Hire .NET Developers services connect you with experienced professionals skilled in agile methodologies and the latest .NET technologies. We offer flexible hiring models—full-time, part-time, or project-based—to ensure high-quality results, timely delivery, and a collaborative development process.',
        'QA & Testing Services': 'Our QA & Testing Services ensure businesses deliver flawless software by providing comprehensive testing, including functional testing, automation, and end-to-end quality assurance. We offer tailored solutions to help you launch with confidence and maintain a competitive edge.',
    };

    const [selectedService, setSelectedService] = useState('Custom Software Development');

    return (
        <Container maxWidth="lg" sx={{paddingY: '40px', backgroundColor: '#f9f9f9'}}>
            <Typography variant="h4" gutterBottom
                        sx={{textAlign: 'center', color: '#333', fontWeight: '700', marginBottom: "30px"}}>
                Our Software Development Services in India
            </Typography>
            <Grid container spacing={4}>
                {/* Sidebar */}
                <Grid item xs={12} md={3}>
                    <List>
                        {services.map((service, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    backgroundColor: selectedService === service ? '#007BFF' : 'transparent',
                                    color: selectedService === service ? '#fff' : '#333',
                                    borderRadius: '8px',
                                    marginBottom: '8px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => setSelectedService(service)}
                            >
                                <ListItemText primary={service}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                {/* Content Area */}
                <Grid item xs={12} md={9}>
                    <Box sx={{padding: '20px', backgroundColor: '#fff', borderRadius: '8px'}}>
                        <Typography variant="h5" gutterBottom style={{fontWeight: "500", fontSize: "30px"}}>
                            {selectedService}
                        </Typography>
                        <Typography variant="body1" style={{fontSize: "19px"}} paragraph>
                            {serviceDetails[selectedService]}
                        </Typography>
                        <Typography variant="body1" style={{fontSize: "19px"}} paragraph>
                            {serviceDetails2[selectedService]}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ServicesIndia;
