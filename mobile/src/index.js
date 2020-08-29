import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                <Text style={styles.title}>Hello</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 32,
        color: '#FFF',
    }
});