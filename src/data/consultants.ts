import { Consultant } from '@/types/consultants'

const consultants: Consultant[] = [
  {
    name: 'Ray Fenyoe',
    title: 'Director',
    image: 'ray.png',
    about: [
      'Ray Fenyoe is an economist and market research specialist with 35 years consultancy experience in the global freight transport industry.',
      'His major expertise is in international container and intermodal transport, and his major strengths are:',
      [
        'Integrating strong research teams to devise commercially viable and sustainable research solutions to business problems',
        'Rapidly understands new issues and markets',
        'Analysis and forecasting based on market study rather than black-box econometric models.'
      ],
      'Ray has developed his extensive expertise carrying out transport sector due diligence studies for financial institutions or operators and working as:',
      [
        'Ports economist at the UK National Ports Council',
        'Strategic business adviser to major ports around the w',
        'Project director in a wide range of private and public sector studies',
        'Project manager in EU, TACIS, EIB, and ADB projects.'
      ]
    ]
  },
  {
    name: 'Julia Miller',
    title: 'Senior Consultant',
    image: 'julia.png',
    about: [
      'Julia Miller is a languages graduate with fluent French, a working knowledge of German, Spanish, and Italian, and some Russian. She has worked with SRG since 1997, researching a wide range of industrial markets, primarily within the transport field, using telephone and face-to-face interviews, and desk and Web research. Her strengths are her attention to detail, structured approach, customer-centred attitude, and in-depth understanding of how supply chains work.',
      'Previously, Julia was Sales and Marketing Manager for British Rail’s Connectrail, responsible for',
      [
        'Account management of the train ferry business',
        'Developing new European conventional wagon business',
        'Managing the transition to Channel Tunnel operations.'
      ],
      'She worked closely with the railway industries of the major European countries, including wagon and terminal operators, and with ports and shipping lines.'
    ]
  }
]

export default consultants
