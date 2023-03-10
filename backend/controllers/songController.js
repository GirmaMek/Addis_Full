// listSongs, createSong, updateSong, deleteSong
const express = require('express')

const {Song} = require('../models/songsModel')
// const Song = require('../models/songsModel').Song;
// const genereOptions= require('../models/songsModel').genreOptions;

const listSong = async function(req,res) {
 try { 
    const data = await Song.find();
    console.log(data);
    return res.status(200).json({success: true, data: data})
}
catch(err) {
    res.status(500).json({success: false, data: 'error while loading the data'})
}
}
const createSong = async function(req,res) {
    try{
    await Song.create(req.body);
    res.status(201).json({success:true, message: "song created successfully."})
    }
    catch(err){res.status(400).json({success:false, data: err})}
 
}
const updateSong = async function(req,res) {
 try{
    const id = req.params.id;
    const song = await Song.findByIdAndUpdate(id,req.body,{runValidators:true,});
    return res.status(201).json({success:true, message: "song has been updated"});
 }
 catch(err){console.log(err);return res.status(400).json({success:false, message: 'Bad request'})}
}
const deleteSong = async function(req,res,next) {
try{
    const id = req.params.id;
    const song = await Song.findById(id);
    if(song){
        await Song.findByIdAndDelete(id);
       return res.status(202).json({success:true,message:"Song Deleted Successfully"});  
    }
    else {return res.status(400).json({success:false, message: 'Song is not found'})}
}
catch(err){return res.status(409).json({success:false, message: 'Song not deleted.'})}
}



//////////////////////////////////////////

// const Song = require('../models/songsModel');

// Get statistics about songs, artists, and genres
const getStats = async (req, res, next) => {
  try {
    const stats = await Song.aggregate([
      // Total number of songs, artists, and genres
      {
        $group: {
          _id: null,
          numSongs: { $sum: 1 },
          numArtists: { $addToSet: '$artist' },
          numGenres: { $addToSet: '$genre' },
          numAlbums: {$addToSet: '$album'}
        },
      },
      // Count the number of unique artists and genres
      {
        $project: {
          _id: 0,
          numSongs: 1,
          numArtists: { $size: '$numArtists' },
          numGenres: { $size: '$numGenres' },
          numAlbums: {$size: '$numAlbums'}
        },
      },
    ]);

    // Total number of songs, artists, and genres
    const totalSongs = stats[0].numSongs;
    const totalArtists = stats[0].numArtists;
    const totalGenres = stats[0].numGenres;
    const totalAlbums = stats[0].numAlbums;

    // Get number of songs in each genre
    const genreStats = await Song.aggregate([
      {
        $group: {
          _id: '$genre',
          numSongs: { $sum: 1 },
        },
      },
    ]);

    // Get number of songs by each artist and album
    const artistStats = await Song.aggregate([
      {
        $group: {
          _id: {
            artist: '$artist',
            album: '$album',
          },
          numSongs: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: '$_id.artist',
          albums: {
            $push: {
              name: '$_id.album',
              numSongs: '$numSongs',
            },
          },
          numSongs: { $sum: '$numSongs' },
        },
      },
    ]);

    res.status(200).json({
      totalSongs,
      totalArtists,
      totalGenres,
      totalAlbums,
      genreStats,
      artistStats,
    });
  } catch (err) {
    next(err);
  }
};


////////////////////////////////////////////////





module.exports = {
    listSong,
     createSong, 
    updateSong, 
    deleteSong,
    getStats
}