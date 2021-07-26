const miscMenuBlocks = {
    colorDetectMenu: {
        acceptReporters: true,
        items: [{ text: "红色", value: 0 }, { text: "绿色", value: 1 }, { text: "蓝色", value: 2 }, { text: "全部", value: -1 },]
    }
    , colorDetectResultMenu: {
        acceptReporters: true,
        items: [{ text: "红色", value: "(1,0,0)" }, { text: "绿色", value: "(0,1,0)" }, { text: "蓝色", value: "(0,0,1)" }, { text: "黄色", value: "(1,1,0)" }, { text: "紫色", value: "(1,0,1)" }, { text: "天蓝色", value: "(0,1,1)" }, { text: "黑色", value: "(0,0,0)" }, { text: "白色", value: "(1,1,1)" }]
    },
    faceMenu: {
        acceptReporters: true,
        items: [{ text: "笑脸", value: "0x01" }, { text: "调皮", value: "0x02" }, { text: "得意", value: "0x03" }, { text: "伤心", value: "0x04" }, { text: "开心", value: "0x05" }, { text: "OK", value: "0x06" }, { text: "两眼发光", value: "0x07" }]
    },
    faceColorMenu: {
        acceptReporters: true,
        items: [{ text: "红色", value: "FACE_COLOR_RED" }, { text: "绿色", value: "FACE_COLOR_GREEN" }, { text: "蓝色", value: "FACE_COLOR_BLUE" }, { text: "红蓝", value: "FACE_COLOR_REDBLUE" }, { text: "红绿", value: "FACE_COLOR_REDGREEN" }, { text: "蓝绿", value: "FACE_COLOR_BLUEGREEN" }, { text: "白色", value: "FACE_COLOR_RBG" }]
    },
    digitalDisplayIntensityMenu: {
        acceptReporters: true,
        items: [{ text: "0", value: 0 }, { text: "1", value: 1 }, { text: "2", value: 2 }, { text: "3", value: 3 },
        { text: "4", value: 4 }, { text: "5", value: 5 }, { text: "6", value: 6 }, { text: "7", value: 7 }, { text: "8", value: 8 }]
    },
    actions: {
        acceptReporters: true,
        items: [{ text: "开始", value: "START" }, { text: "切换", value: "SWITCH" }]
    },
    color: {
        acceptReporters: true,
        items: [{ text: "红色", value: "red" }, { text: "绿色", value: "green" }, { text: "蓝色", value: "blue" }, { text: "黄色", value: "yellow" }, { text: "天蓝色", value: "skyblue" }, { text: "紫色", value: "purple" }, { text: "白色", value: "white" }, { text: "黑色", value: "black" }]
    },
    imageMethods: {
        acceptReporters: true,
        items: [{ text: "边缘查找", value: "iess" }, { text: "锐化", value: "ishs" }, { text: "浮雕化", value: "issr" }]
    },
    colorResult: {
        acceptReporters: true,
        items: [{ text: "X", value: "0" }, { text: "Y", value: "1" }, { text: "宽度", value: "2" }, { text: "高度", value: "3" }]
    },
    faceModes: {
        acceptReporters: true,
        items: [{ text: "默认模式", value: "00" }, { text: "保存模式", value: "01" }]
    },
    inferedIndexMenu: {
        acceptReporters: true,
        items: [{ text: "一", value: "0" }, { text: "二", value: "1" }, { text: "三", value: "2" }, { text: "四", value: "3" }, { text: "五", value: "4" }, { text: "六", value: "5" }, { text: "七", value: "6" }, { text: "八", value: "7" },]
    },
    inferedDirectionMenu: {
        acceptReporters: true,
        items: [{ text: "车前", value: "front" }, { text: "车左前", value: "frontleft" }, { text: "车前中", value: "frontcenter" }, { text: "车右前", value: "frontright" }, { text: "车后", value: "back" }, { text: "车左后", value: "backleft" }, { text: "车后中", value: "backcenter" }, { text: "车右后", value: "backright" },]
    }
}

module.exports = miscMenuBlocks;