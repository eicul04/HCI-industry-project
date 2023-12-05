#include "arUcoMarkerDetection.h"
#include <opencv2/aruco.hpp>

int startDetection() {
    // Load the dictionary that was used to generate the markers.
    Ptr<Dictionary> dictionary = getPredefinedDictionary(DICT_6X6_250);

    // Initialize the detector parameters using default values
    Ptr<DetectorParameters> parameters = DetectorParameters::create();

    // Declare the vectors that would contain the detected marker corners and the rejected marker candidates
    vector<vector<Point2f>> markerCorners, rejectedCandidates;

    // The ids of the detected markers are stored in a vector
    vector<int> markerIds;

    // Detect the markers in the image
    detectMarkers(frame, dictionary, markerCorners, markerIds, parameters, rejectedCandidates);
}