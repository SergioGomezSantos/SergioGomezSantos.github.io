interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "",
        show: true
    },
    {
        name: "Inglés",
        level: "B1",
        description: "",
        show: true
    }
];

export default languages;