import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    title: 'Software Engineer Intern',
    company: 'Juniper Networks',
    period: 'May 2025 - Aug 2025',
    description: 'Configured and deployed Juniper vSRX firewalls in a Kubernetes environment using KubeVirt to support advanced security features and complex topologies. Automated deployments with Helm, enabled multi-networking via Multus, and reduced external bandwidth usage by 100% using DataVolume cloning.',
    skills: ['Kubernetes', 'Kubevirt', 'Helm', 'Python', 'Linux'],
    image: '/images/juniper.png',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Techsture Technologies',
    period: 'Jan 2024 - May 2024',
    description: 'Developed a custom ERP system using Django to streamline key HR functions such as payslip generation, attendance tracking, event and task management, and leave approval. Integrated role-based access control and multi-factor authentication to enhance security and ensure safe access across the organization’s intranet portals.',
    skills: ['Django', 'Python', 'React', 'JavaScript', 'HTML', 'CSS', 'Git'],
    image: '/images/techsture.jpeg',
  },
  {
    title: 'Summer Intern',
    company: 'Northern Trust',
    period: 'June 2023 - Aug 2023',
    description: 'Integrated Natural Language Understanding into a virtual agent chatbot on the ServiceNow platform by surveying user utterances and mapping them to specific workflows for automated execution. Built a JavaScript-based service monitoring feature to display real-time status of critical applications, reducing IT help desk support calls by 50%.',
    skills: ['JavaScript', 'ServiceNow', 'Agile', 'Testing'],
    image: '/images/northern-trust.jpeg',
  },
];
