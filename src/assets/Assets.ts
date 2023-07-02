/* eslint-disable global-require */
class AppAssets {
    readonly images = {
Add: require('../assets/images/Add.png'),
barchart: require('../assets/images/bar_chart.png'),
home: require('../assets/images/home.png'),
notification: require('../assets/images/notification.png'),
profile: require('../assets/images/profile.png'),
left_arrow: require('../assets/images/left_arrow.png'),
profile_header: require('../assets/images/profile_header.png'),
main_pic: require('../assets/images/main_Pic.png'),
heart: require('../assets/images/heart.png'),
burn: require('../assets/images/burn.png'),
        timing: require('../assets/images/timing.png'),
Line: require('../assets/images/Line.png'),

     
    } as const;

  
}

const Assets = new AppAssets();

export default Assets;
