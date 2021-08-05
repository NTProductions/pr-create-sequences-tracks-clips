//Create Sequences, Tracks, and Clips

var project = app.project;

// sequence stuff
var sequence, sequenceOne;
// new sequence methods
sequenceOne = project.createNewSequence("Test Sequence");

sequence = project.createNewSequenceFromClips("Clips Sequence", projectItemArray, project.rootItem);

project.deleteSequence(sequenceOne);

// you can also access all the sequences in a project via:
var allSequences = project.sequences;

// track stuff
var myTrack = sequence.videoTracks[0];

var time = new Time();
time.seconds = 0;

// there are basically 2 ways to add things to a track
myTrack.insertClip(projectItemArray[0], time.ticks);
myTrack.overwriteClip(projectItemArray[0], time.ticks);
// these methods don't return us with a clip item, so if you want to access it after this, you must search for it (we will do that below)

// you can also add more audio/video tracks as well as move clips to various tracks
// this is covered in a previous tutorial and uses the QE DOM

// clips stuff
var clip;
for(var i = 0; i < myTrack.clips.length; i++) {
    if(myTrack.clips[i].name == projectItemArray[0]) {
        clip = myTrack.clips[i];
        }
    }

// changing some of the start/end points can occassionally cause your script to stop running
clip.start;
clip.inPoint;
clip.outPoint;
clip.end;

clip.getSpeed();
clip.isAdjustmentLayer();
clip.isSelected();
clip.remove(0, 0);
