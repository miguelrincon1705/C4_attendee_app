import { CameraView } from "expo-camera";
import { useLocalSearchParams } from 'expo-router';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useContext } from 'react';
import { AppContext } from './appContext';
import { useRouter } from 'expo-router';


export default function qrScan() {
    const easterEggs = ["E wdu59P'dGJ;(+t>rx@K="];

    const { globalState, setGlobalState } = useContext(AppContext);

    const router = useRouter();


    return (
            <View style={styleSheet.container}>

                     <Text style={styleSheet.welcomeText}>Hello, {globalState.userName}!</Text>
                     <Text style={styleSheet.welcomeText}>Points: {globalState.points}</Text>
                     <Text style={styleSheet.welcomeText}>🐣: {globalState.easterEggsCollected}/{globalState.maxEasterEggs}</Text>

        <SafeAreaView style={styleSheet.container}>

            {Platform.OS === "android" ? <StatusBar hidden /> : null}

            <CameraView
                style={styleSheet.camStyle}
                facing="back"
                barcodeScannerSettings={
                    {
                        barcodeTypes: 'qr',
                    }
                }

                onBarcodeScanned={
                    ({ data }) => {
//                         console.log(data); // here you can get your barcode id or url
                             if (data === "A2") {
                               // Navigate to the next screen and pass the name as a parameter
                               router.push({ pathname: '/survey', params: { source: "A2" } });
                             } else if (easterEggs.includes(data)) {
                                 router.push({ pathname: '/easterEgg', params: { key: data}});
                                 } else {
                               alert("QR scanned is invalid...");
                             }
                    }
                }
            />

        </SafeAreaView>
        </View>
    );

}

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20
    },
    welcomeText: { fontSize: 24, fontWeight: 'bold' },
    camStyle: {
        position: 'absolute',
        width: 300,
        height: 300
    }
});