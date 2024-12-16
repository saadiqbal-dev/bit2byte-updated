import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, History, Award } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';

const timeline = [
  { year: '2020', title: 'Company Founded', description: 'Bit2Byte was established with a vision to transform digital experiences.' },
  { year: '2021', title: 'Global Expansion', description: 'Expanded operations to serve clients worldwide.' },
  { year: '2022', title: 'AI Integration', description: 'Pioneered AI-powered development solutions.' },
  { year: '2023', title: 'Industry Recognition', description: 'Received multiple awards for innovation in tech.' }
];

export const About = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="About Bit2Byte"
          subtitle="Pioneering the future of digital solutions through innovation and expertise"
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-slate-400 mb-8">
              Founded in 2020, Bit2Byte has been at the forefront of digital innovation,
              combining cutting-edge technology with creative excellence to deliver
              exceptional digital solutions for businesses worldwide.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { label: 'Projects Completed', value: '200+' },
                { label: 'Client Satisfaction', value: '98%' },
                { label: 'Team Members', value: '50+' },
                { label: 'Countries Served', value: '25+' }
              ].map((stat) => (
                <Card key={stat.label} className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Target className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-slate-400">
                To empower businesses with innovative digital solutions that drive growth
                and success in the modern digital landscape.
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">Our Values</h3>
              </div>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Innovation at Heart
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Client Success First
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Excellence in Delivery
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Continuous Learning
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="text-2xl font-bold text-blue-500 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};