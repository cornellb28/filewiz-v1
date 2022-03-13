"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const index_1 = require("./index");
//const artistMgr = require("../models/artistMgr");
// Scan the root directory user selected
// This could be my main source of scanning any path
electron_1.contextBridge.exposeInMainWorld("fileApp", {
    // button action to show
    getDirectoryRoot: () => electron_1.ipcRenderer
        .invoke("upload-files")
        .then(async (result) => {
        const retFiles = await (0, index_1.getMetaData)(result);
    })
        .catch((error) => {
        console.log("error message", error);
    }),
    //async (result: DirectoryModel) => {
    // const selectedFilePath = result.filePaths;
    // const scanDir = await scanDirectory(selectedFilePath);
    // console.log(scanDir)
    // Lets create the var that will hold our new data
    //   let audioTracks: trackMeta[] = [];
    //   for (let audioPath of scandDir.slice(0, 50)) {
    //     // set a promise that resolve the promise if tags exist //
    //     const tags = await new Promise<NodeID3.Tags | null>(
    //       (resolve, reject) => {
    //         NodeID3.read(audioPath, { noRaw: true }, (err, tags) => {
    //           // early exit
    //           if (err) {
    //             console.log("nodeid-3 had an issue", err);
    //             reject(err);
    //           }
    //           resolve(tags);
    //         });
    //       }
    //     );
    //     // early exit
    //     if (tags === null) continue; // tags does not exist move on to the next audio file
    //     let audioObject: trackMeta = {
    //       trackId: uniqid("track_"),
    //       location: audioPath,
    //       favorite: false,
    //       artist: tags.artist,
    //       fileType: tags.fileType,
    //       year: tags.year,
    //       genre: tags.genre,
    //       initialKey: tags.initialKey,
    //       length: tags.length,
    //       bpm: tags.bpm,
    //       title: tags.title,
    //       contentGroup: tags.contentGroup,
    //       publisher: tags.publisher,
    //       composer: tags.composer,
    //       remixArtist: tags.remixArtist,
    //       album: tags.album,
    //       image: tags.image,
    //       comment: tags.comment,
    //     };
    //     // I need to deconstruct these two so I can conver the image Buffer for image src
    //     // jsut need comment text
    //     const { image, comment } = audioObject;
    //     if (typeof image === "undefined" || typeof image === "string") continue;
    //     const { imageBuffer } = image;
    //     let dataImageLarge = sharp(Buffer.from(imageBuffer)).resize(100);
    //     // let dataImageMedium = sharp(Buffer.from(imageBuffer)).resize(50)
    //     // let dataImageSmall = sharp(Buffer.from(imageBuffer)).resize(35)
    //     // let dataMime = mime.split('/')[1].toLowerCase()
    //     // await dataImage.toFile(`..covers/record-${id}.${dataMime}`)
    //     //const data = JSON.stringify(audioObject);
    //     const coverBuffer = await dataImageLarge
    //       .jpeg({ quality: 100 })
    //       .toBuffer();
    //     // const updatedFile = _.omit(audioObject, ["image", "comment"]);
    //     //const cover = `data:image/jpeg;base64,` + coverBuffer.toString("base64");
    //     audioTracks.push({ ...audioObject });
    //   return audioTracks;
    //}),
    //getNames: () => artistMgr.getNames(),
    //addArtist: (name: string) => artistMgr.addArtist(name),
});
//# sourceMappingURL=preload.js.map