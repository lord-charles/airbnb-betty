// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork'
import Tag from 'mdi-material-ui/Tag'
import TruckDelivery from 'mdi-material-ui/TruckDelivery'
import AccountMultiple from 'mdi-material-ui/AccountMultiple'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/Home'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Auth'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'Customer Management'
    },
    {
      title: 'Customers',
      icon: AccountMultiple,
      path: '/customers'
    },
    {
      title: 'Custom Reservation',
      icon: AccountMultiple,
      path: '/CustomReservation'
    },

    {
      sectionTitle: 'Catalog Management'
    },
    {
      title: '2Bdrm aprt 1E',
      path: '/2Bdrmaprt1E',
      icon: AddHomeWorkIcon
    },
    {
      title: '2Bdrm aprt 2A',
      path: '/2Bdrmaprt2A',
      icon: AddHomeWorkIcon
    },
    {
      title: '3Bdrm aprt 1',
      path: '/3Bdrmaprt1',
      icon: AddHomeWorkIcon
    },
    {
      title: 'One Bedroom',
      path: '/OneBedroom',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 12',
      path: '/Studio12',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 24',
      path: '/Studio24',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio E4',
      path: '/StudioE4',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 77',
      path: '/Studio77',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 43',
      path: '/Studio43',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 35',
      path: '/Studio35',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 8',
      path: '/Studio8',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 16',
      path: '/Studio16',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 28',
      path: '/Studio28',
      icon: AddHomeWorkIcon
    },
    {
      title: 'Studio 68',
      path: '/Studio68',
      icon: AddHomeWorkIcon
    },

    {
      sectionTitle: 'Marketing Management'
    },
    {
      title: 'Add coupon',
      path: '/coupon/addcoupon',
      icon: Tag
    },
    {
      title: 'Coupon list',
      icon: Tag,
      path: '/coupon/couponlist'
    },
    {
      title: 'Add blogs',
      icon: Table,
      path: '/blog/addblog'
    },
    {
      title: 'Blogs list',
      icon: Table,
      path: '/blog/bloglist'
    },

    {
      sectionTitle: 'Orders Management'
    },
    {
      title: 'Orders',
      path: '/orders',
      icon: TruckDelivery
    },
    {
      sectionTitle: 'Enquiries Management'
    },

    {
      title: 'Enquiries',
      icon: CubeOutline,
      path: '/enquiries'
    }

    // {
    //   sectionTitle: 'leaning section'
    // },
    // {
    //   title: 'Coupon list',
    //   icon: Tag,
    //   path: '/cards'
    // },
    // {
    //   title: 'Add blogs',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   title: 'Blogs list',
    //   icon: Table,
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
