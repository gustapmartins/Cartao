export interface ICart {
    changes: {
        numberCart: string;
        nameUser: string;
        Valid: string;
        CVV: string;
    }

    setChanges: React.Dispatch<React.SetStateAction<{
        numberCart: string;
        nameUser: string;
        Valid: string;
        CVV: string;
    }>>
}