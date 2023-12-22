import {PATH} from '../assests/images';
import {
  InstraIcon,
  LinkdinIcon,
  YoutubeIcon,
  LoveIcon,
  StarIcon,
  VerticalDots,
} from '../assests/svg';
import { COLOR } from './StyeGuide';

const slides = [
  {
    id: 1,
    img: PATH.sliderbg1,
    title: 'Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
  },
  {
    id: 2,
    img: PATH.sliderbg2,
    title: 'Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
  },
  {
    id: 3,
    img: PATH.sliderbg3,
    title: 'Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.',
  },
];

const CategoryItems = [{value: 'Item 1'}, {value: 'Item 2'}, {value: 'Item 3'}];
const Gender = [{value: 'Male'}, {value: 'Female'}, {value: 'Other'}];
const SocialItems = [
  {name: 'Instragram', svg: <InstraIcon />},
  {name: 'Youtube', svg: <YoutubeIcon />},
  {name: 'Linkedin', svg: <LinkdinIcon />},
];
const homeSocialItems = [
  {
    name: 'Instragram',
    svg: <InstraIcon height={30} width={30} />,
    followers: '12K',
  },
  {
    name: 'Youtube',
    svg: <YoutubeIcon height={30} width={30} />,
    followers: '12K',
  },
  {
    name: 'Linkedin',
    svg: <LinkdinIcon height={30} width={30} />,
    followers: '12K',
  },
  {
    name: 'Linkedin',
    svg: <LinkdinIcon height={30} width={30} />,
    followers: '12K',
  },
];
const socialStatistics = [
  {
    title: 'Total Likes',
    svg: <LoveIcon />,
    totalValue: '22.3K',
    more: '+23 more',
  },
  {
    title: 'Total Ratings',
    svg: <StarIcon />,
    totalValue: '1K',
    more: '+5 more',
  },
];
export const userData = [
  {title: 'Withdrawl Availbility', val: '$0'},
  {title: 'Montly Earnings', val: '$0'},
  {title: 'Avg. selling Price', val: '$0'},
  {title: 'Active Orders', val: '$0', total: ' ($0)'},
  {title: 'Payment being cleared', val: '$0'},
  {title: 'Cancelled Orders', val: '$0', total: ' (-$0)'},
];
const progress = [
  {activeStroke:COLOR.success,maximumValue:100,currVal:88,valSuffix:"%",text:"Response\nRate"},
  {activeStroke:COLOR.danger,maximumValue:100,currVal:47,valSuffix:"%",text:"Order\nCompletion"},
  {activeStroke:COLOR.danger,maximumValue:100,currVal:79,valSuffix:"%",text:"On-Time\nDelivery"},
  {activeStroke:COLOR.success,maximumValue:1,currVal:1,valSuffix:"h",text:"Response\nTime"},
]
const chartHeader=[
  {text:"Completed",success:true},
  {text:"Cancalled",success:false}
]
const barData = [
  {
    value: 40,
    label: 'Week 1',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: COLOR.success,
  },
  {value: 20, frontColor: COLOR.danger},
  {
    value: 50,
    label: 'Week 2',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: COLOR.success,
  },
  {value: 40, frontColor: COLOR.danger},
  {
    value: 30,
    label: 'Week 3',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: COLOR.success,
  },
  {value: 25, frontColor: COLOR.danger},
  {
    value: 30,
    label: 'Week 4',
    spacing: 2,
    labelWidth: 30,
    labelTextStyle: {color: 'gray'},
    frontColor: COLOR.success,
  },
  {value: 20, frontColor: COLOR.danger},
];
const earningAnalytics =[
  {title:"Montly Earning",value:"$0"},
  {title:"Avg-selling price",value:"$0"},
  {title:"Active Orders",value:"0",prefix:"($0)"},
  {title:"Withdrawl Availbility",value:"$0"},
  {title:"Completed Orders",value:"0",prefix:"($0)"},
  {title:"Lifetime Earnings",value:"0",prefix:"($0)"},
]
const revenuesAnalytics =[
  {title:"Payment being cleared",value:"$0"},
  {title:"Earning To Date",value:"$0"},
  {title:"Expenses To Date",value:"$0"},
  {title:"Payment being cleared",value:"$0"},
]
const userMessages = [
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
  {name:"Hazel Finch",userImg:PATH.messageimage,lastSent:"Sent 21 hours ago",verticaldot:<VerticalDots/>},
]
export {
  revenuesAnalytics,
  earningAnalytics,
  barData,
  socialStatistics,
  slides,
  CategoryItems,
  Gender,
  SocialItems,
  homeSocialItems,
  progress,
  chartHeader,
  userMessages
};
