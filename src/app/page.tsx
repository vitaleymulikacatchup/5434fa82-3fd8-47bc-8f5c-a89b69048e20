"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Award, Sparkles, Zap, Users, Heart, Briefcase } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLargeSizeMediumTitles"
      background="blurBottom"
      cardStyle="soft-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Ball"
          navItems={[
            { name: "Work", id: "features" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{
            text: "Get in Touch",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Exceptional Design, Timeless Impact"
          description="Ball is a contemporary design studio crafting innovative visual solutions for brands that dare to stand out. We merge strategy, creativity, and precision to deliver work that resonates."
          background={{ variant: "plain" }}
          tag="Creative Studio"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          buttons={[
            { text: "View Our Work", href: "#features" },
            { text: "Start a Project", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=l91xdk",              imageAlt: "Modern design studio workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=27bq23",              imageAlt: "Creative design portfolio showcase"
            }
          ]}
          mediaAnimation="blur-reveal"
          rating={5}
          ratingText="Trusted by 50+ brands worldwide"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          tagIcon={Award}
          tagAnimation="blur-reveal"
          title="We Design for Purpose, Not Just Aesthetics"
          buttons={[
            { text: "Learn More", href: "#team" }
          ]}
          buttonAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Featured Works"
          description="Explore our latest projects showcasing diverse design disciplines and creative solutions for forward-thinking brands."
          tag="Portfolio"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          features={[
            {
              id: "branding-project",              title: "Brand Identity System",              description: "Complete visual identity including logo, color palette, typography system, and brand guidelines for a luxury lifestyle brand.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6ikbeu",              imageAlt: "Branding project showcase"
            },
            {
              id: "web-project",              title: "E-Commerce Platform",              description: "User-centered web design for a modern e-commerce platform emphasizing intuitive navigation and conversion optimization.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6rm03v",              imageAlt: "Web design project"
            },
            {
              id: "packaging-project",              title: "Luxury Packaging Design",              description: "Premium product packaging design combining sustainable materials with sophisticated aesthetics for an upscale beauty brand.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g4io8u",              imageAlt: "Packaging design project"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "View All Projects", href: "#" }
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet the Creative Minds"
          description="Our talented team brings together diverse expertise in design, strategy, and brand development to create exceptional work."
          tag="Our Team"
          tagIcon={Users}
          tagAnimation="blur-reveal"
          members={[
            {
              id: "team-1",              name: "Alexandra Chen",              role: "Creative Director",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=kwp6yk",              imageAlt: "Alexandra Chen, Creative Director"
            },
            {
              id: "team-2",              name: "Marcus Rodriguez",              role: "Brand Strategist",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7msurp",              imageAlt: "Marcus Rodriguez, Brand Strategist"
            },
            {
              id: "team-3",              name: "Sophia Müller",              role: "UX/UI Designer",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3yvel8",              imageAlt: "Sophia Müller, UX/UI Designer"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Join Our Team", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Our Clients"
          description="See what industry leaders and innovative brands say about their experience working with Ball."
          tag="Testimonials"
          tagIcon={Heart}
          tagAnimation="blur-reveal"
          testimonials={[
            {
              id: "testimonial-1",              name: "James Patterson",              role: "CEO",              testimonial: "Ball transformed our brand identity completely. Their strategic approach and creative execution exceeded our expectations. The team understood our vision and delivered beyond what we imagined.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fd3b4j",              imageAlt: "James Patterson"
            },
            {
              id: "testimonial-2",              name: "Emma Hartley",              role: "Marketing Director",              testimonial: "Working with Ball was a game-changer for our luxury brand. Their attention to detail and sophisticated design approach perfectly captured our brand essence. Highly recommended.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lbyoqf",              imageAlt: "Emma Hartley"
            },
            {
              id: "testimonial-3",              name: "David Kim",              role: "Founder",              testimonial: "From concept to execution, Ball demonstrated exceptional creativity and professionalism. They didn't just design for us—they solved our business challenges through thoughtful design strategy.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ihu6rp",              imageAlt: "David Kim"
            },
            {
              id: "testimonial-4",              name: "Lisa Wong",              role: "Brand Manager",              testimonial: "Ball's ability to merge sustainability with stunning design is remarkable. They created a brand identity that truly reflects our values while resonating with our audience.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ydtk4t",              imageAlt: "Lisa Wong"
            }
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardFour
          title="Our Design Services"
          description="Comprehensive design solutions tailored to elevate your brand and drive business growth across all touchpoints."
          tag="Services"
          tagIcon={Briefcase}
          tagAnimation="blur-reveal"
          products={[
            {
              id: "service-1",              name: "Brand Strategy",              variant: "Foundation",              price: "Custom",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6ikbeu",              imageAlt: "Brand Strategy Service"
            },
            {
              id: "service-2",              name: "Visual Identity",              variant: "Premium",              price: "Custom",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6rm03v",              imageAlt: "Visual Identity Service"
            },
            {
              id: "service-3",              name: "Digital Design",              variant: "Full-Stack",              price: "Custom",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g4io8u",              imageAlt: "Digital Design Service"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="opacity"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Explore All Services", href: "#" }
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Have questions about our process, services, or how we work? Find answers to common inquiries below."
          faqs={[
            {
              id: "faq-1",              title: "What is your design process?",              content: "We follow a strategic approach beginning with discovery and research, followed by concept development, design exploration, refinement, and delivery. We collaborate closely with clients throughout to ensure the vision is realized."
            },
            {
              id: "faq-2",              title: "How long does a typical project take?",              content: "Project timelines vary based on scope and complexity. A brand identity project typically takes 8-12 weeks, while web design projects may take 12-16 weeks. We provide detailed timelines during the initial consultation."
            },
            {
              id: "faq-3",              title: "Do you work with startups?",              content: "Absolutely! We love working with innovative startups. We offer flexible engagement models and packages designed to support emerging brands on various budgets."
            },
            {
              id: "faq-4",              title: "Can you help with rebranding?",              content: "Yes, rebranding is one of our specialties. We help established brands evolve their identity while maintaining equity and strengthening market position through thoughtful design strategy."
            },
            {
              id: "faq-5",              title: "What industries do you specialize in?",              content: "We work across diverse industries including tech, luxury, sustainable goods, healthcare, and hospitality. Our diverse portfolio allows us to bring fresh perspectives and industry best practices to every project."
            },
            {
              id: "faq-6",              title: "How do we get started?",              content: "Contact us through our website or email. We'll schedule a discovery call to understand your needs, goals, and vision. From there, we'll propose a tailored approach and timeline."
            }
          ]}
          faqsAnimation="blur-reveal"
          useInvertedBackground={false}
          buttons={[
            { text: "Get in Touch", href: "#contact" }
          ]}
          buttonAnimation="blur-reveal"
          textPosition="left"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Create Something Beautiful"
          description="Ready to elevate your brand? Get in touch with our team to discuss your project and explore how Ball can help you stand out."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "your@email.com", required: true },
            { name: "company", type: "text", placeholder: "Your Company" },
            { name: "projectType", type: "text", placeholder: "Project Type (e.g., Branding, Web Design)" }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your project...",            rows: 6,
            required: true
          }}
          useInvertedBackground={true}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=l91xdk"
          imageAlt="Creative studio collaboration"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Studio",              items: [
                { label: "About Us", href: "#about" },
                { label: "Work", href: "#features" },
                { label: "Team", href: "#team" },
                { label: "Services", href: "#services" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "Design Insights", href: "#" },
                { label: "Case Studies", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Email", href: "mailto:hello@ball.studio" }
              ]
            }
          ]}
          bottomLeftText="© 2024 Ball Design Studio. All rights reserved."
          bottomRightText="Crafting visual excellence since 2020"
        />
      </div>
    </ThemeProvider>
  );
}