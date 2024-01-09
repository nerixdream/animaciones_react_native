import { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'

export const Animaciones1 = () => {

    const animatedValues = {
        opacity: useRef(new Animated.Value(1)).current,
        scale: useRef(new Animated.Value(0)).current,
    }

    const { opacity, scale } = animatedValues

    const handleAnimated = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start(({ finished }) => {
            if (finished) {
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false
                }).start()
                Animated.timing(scale, {
                    toValue: 1.5,
                    duration: 1000,
                    useNativeDriver: false
                }).start()
            }
        })
    }

    const animatedStyles = {
        opacity,
        transform: [{ scale }]
    }

    return (
        <View>
            <Animated.View style={[styles.box, animatedStyles]} />
            <TouchableOpacity
                style={styles.boton}
                activeOpacity={.9}
                onPress={handleAnimated}
            >
                <Text style={styles.botonText}>Animar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#4f46e5',
        borderRadius: 12,
        height: 150,
        width: 150,
    },
    boton: {
        backgroundColor: '#111827',
        borderRadius: 12,
        padding: 18,
        marginTop: 50,
    },
    botonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    }
});