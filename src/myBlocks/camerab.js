const BlockType = require("../extension-support/block-type")
const ArgumentType = require("../extension-support/argument-type")

const cameraBlocks = [
    {
        type: "custom_seperator",
        text: '★ AI摄像头',
    },
    {
        opcode: 'initCameraI2C',
        blockType: BlockType.COMMAND,
        text: '打开摄像头(I2C)版本',
    },
    {
        opcode: 'switchMode',
        blockType: BlockType.COMMAND,
        text: '摄像头切换到模式[MODE]',
        arguments: {
            MODE: {
                type: ArgumentType.STRING,
                menu: "kcamera_modes"
            },
        }
    },
    {
        type: "custom_seperator",
        text: '★ 物体识别',
    },
    {
        opcode: 'getObjResult',
        blockType: BlockType.REPORTER,
        text: '获取物体识别结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_obj_results"
            },
        }
    },
    {
        type: "custom_seperator",
        text: '★ 分类识别',
    },
    {
        opcode: 'enterClassifierTraining',
        blockType: BlockType.COMMAND,
        text: '进入训练模式,类别名称[NAME]',
        arguments: {
            NAME: {
                type: ArgumentType.STRING,
                defaultValue: 'Table'
            },
        }
    },
    {
        opcode: 'loadClassifier',
        blockType: BlockType.COMMAND,
        text: '加载类别[NAME]进行识别',
        arguments: {
            NAME: {
                type: ArgumentType.STRING,
                defaultValue: 'Table'
            },
        }
    },
    {
        opcode: 'getClassifierResult',
        blockType: BlockType.REPORTER,
        text: '获取分类识别结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_classifier_results"
            },
        }
    },
    {
        type: "custom_seperator",
        text: '★ 人脸识别',
    },
    {
        opcode: 'getFaceResult',
        blockType: BlockType.REPORTER,
        text: '获取人脸识别结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_face_results"
            },
        }
    },
    {
        opcode: 'addFaceByName',
        blockType: BlockType.REPORTER,
        text: '添加人脸ID[NAME]',
        arguments: {
            NAME: {
                type: ArgumentType.STRING,
                defaultValue: 'Steve'
            },
        }
    },
    {
        opcode: 'delFaceSample',
        blockType: BlockType.REPORTER,
        text: '删除所有人脸识别样本',
    },
    {
        type: "custom_seperator",
        text: '★ 二维码/条形码识别',
    },
    {
        opcode: 'getQRCodeResult',
        blockType: BlockType.REPORTER,
        text: '获取二维码结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_qrcode_results"
            },
        }
    },
    {
        opcode: 'getBarCodeResult',
        blockType: BlockType.REPORTER,
        text: '获取条形码结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_barcode_results"
            },
        }
    },
    {
        type: "custom_seperator",
        text: '★ 标签识别',
    },
    {
        opcode: 'getAprilTagResult',
        blockType: BlockType.REPORTER,
        text: '获取标签识别结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_april_results"
            },
        }
    },
    {
        type: "custom_seperator",
        text: '★ 颜色识别',
    },
    {
        opcode: 'getColorResult',
        blockType: BlockType.REPORTER,
        text: '获取颜色识别结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_color_results"
            },
        }
    },
    {
        type: "custom_seperator",
        text: '★ 循迹识别',
    },
    {
        opcode: 'getRouteResult',
        blockType: BlockType.REPORTER,
        text: '获取循迹识别结果[RESULT]',
        arguments: {
            RESULT: {
                type: ArgumentType.STRING,
                menu: "kcamera_route_results"
            },
        }
    },
]

module.exports = cameraBlocks;