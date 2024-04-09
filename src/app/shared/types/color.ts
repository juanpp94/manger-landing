export type Colors = "bright-red"  | "dark-blue"  | "dark-grayish-blue" | "very-dark-blue"  | "very-pale-red" | "vary-light-gray";
export type ObjButton = Record<string,Record<string,boolean>>;
export type ObjBanner = Record<string,Record<string,boolean>>;
export type ObjBullet = Record<string,Record<string,boolean>>;
export const ButtonsStyle: ObjButton = {
    "bright-red-header": {
        "bg-bright-red": true,
        "text-white": true,
        "text-lg":true,
        "font-normal":true,
        "shadow-bright-red/30":true,
        "shadow-xl":true,
        "w-48": true,
        "h-14":true,        
        "md:mt-80":true,
        
    },
    "bright-red-testimonial": {
        "bg-bright-red": true,
        "text-white": true,
        "text-lg":true,
        "font-normal":true,
        "shadow-bright-red/30":true,
        "shadow-xl":true,
        "w-48": true,
        "md:mt-8":true,
    },
    "vary-light-gray": {
        "bg-vary-light-gray":true,
        "text-bright-red":true,
        "text-md": true,
        "font-bold":true,
        "w-48":true,
        "md:mt-8":true
    },

    "header-button-container": {
        "md:justify-start": true,
        "md:mt-16":true
    },
    
    "banner-button-container": {
        "md:justify-center": true,
        "md:mt-16":false
    },
    
    
   
} 

export const BulletsStyle: ObjBullet = {
    "bright-red":{
        "bg-bright-red": true,
        "text-white": true,
        "text-lg":true,
        "w-16":true,
        "h-10":true,
        "font-bold":true
    }
}

export const BannersStyle: ObjBanner = {
    "bright-red": {
        "bg-bright-red": true,
        "text-white": true,
    }
}