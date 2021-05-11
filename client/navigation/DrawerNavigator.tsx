import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useColorScheme from "../hooks/useColorScheme";
import { AntDesign } from "@expo/vector-icons";
import LogInScreen from "../screens/LogInScreen";
import { DrawerParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

const MainDrawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainDrawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <MainDrawer.Screen name="Home" component={BottomTabNavigator} />
    </MainDrawer.Navigator>
  );
}

function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpages%2Fcategory%2FArtist%2FJorge-Garcia-no-oficial-330137457442691%2F&psig=AOvVaw07h0n5hQPIsIXvJ5d0V0Ku&ust=1618895576106000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODsgZXGifACFQAAAAAdAAAAABAD",
                }}
                size={50}
              />
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>Jorge Garcia</Title>
                <Caption style={styles.caption}>@Jor_Gar</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  0
                </Paragraph>
                <Caption style={styles.caption}>Total Points</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({ color }) => <TabBarIcon name="home" color={color} />}
              onPress={() => {}}
            />
            <DrawerItem
              label="Schedule"
              icon={({ color }) => <TabBarIcon name="calendar" color={color} />}
              onPress={() => {}}
            />
            <DrawerItem
              label="Chat"
              icon={({ color }) => <TabBarIcon name="wechat" color={color} />}
              onPress={() => {}}
            />
            <DrawerItem
              label="Settings"
              icon={({ color }) => <TabBarIcon name="setting" color={color} />}
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Log Out"
          icon={() => <Ionicons name="exit-outline" size={30} />}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: { flex: 1 },
  userInfoSection: { paddingLeft: 20 },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

function TabBarIcon(props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) {
  return <AntDesign size={30} {...props} />;
}
