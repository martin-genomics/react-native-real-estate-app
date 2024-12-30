import { createContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getUser } from "./appwrite";
import React from "react";
import { Models } from "react-native-appwrite";

type User = Models.User<Models.Preferences> & {
    avatar: string;
};


interface GlobalProviderType {
    isLoggedIn: boolean;
    user: User;
    error: string | null;
    loading: boolean;
    refetch: (newParams?: any) => Promise<void>;
}


const GlobalContext = createContext<GlobalProviderType | undefined>(undefined);


export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const { data: user, loading, error, refetch } = useAppwrite<any, {}>({
        fn: () => getUser(),
        params: {}
    })

    const data: User = {
        ...user,
    };

    if (data?.avatar) {
        data.avatar = data.avatar.toString();
    }

    const isLoggedIn = !!user;
    return (
        <GlobalContext.Provider value={{
            isLoggedIn,
            user: data,
            loading,
            error,
            refetch
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

