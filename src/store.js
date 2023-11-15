import { reactive } from 'vue';

export const store = reactive({
    header: {
        logoSrc: 'dark-logo.png',
        navItems: {
            home: 'Home',
            pages: 'Pages',
            courses: 'Courses',
            features: 'Features',
            blog: 'Blog',
            shop: 'Shop'
        }
    },
    footer: {
        contacts: {
            address: '382 NE 191st ST # 87394 Miami, FL 33179-3899',
            phoneNumber: '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
            emailAddress: 'support@maxcoach.com'
        }
    },
    icons: {
        twitter: 'x-twitter',
        facebook: 'facebook-f',
        instagram: 'instagram',
        linkedin: 'linkedin'
    }
})