const versions = {
    generic: '0.0.14'
};

// Modules, description y link, tienen que ser puestos en orden.

const versionTable = [
    {
        date: '2025/12/28',
        version: '0.0.12',
        modules: ['Iconos'],
        description: ['Incorporación de 12 nuevos íconos'],
        links: ['/page/icons?sect=update']
    },
    {
        date: '2025/12/31',
        version: '0.0.13',
        modules: ['CloudFile'],
        description: ['Se incorporó el prop preImg'],
        links: ['/page/tools?sect=cloudfile']
    },
    {
        date: '2026/01/06',
        version: '0.0.14',
        modules: ['Down PDF'],
        description: ['Se modificó la manera en la que se descarga'],
        links: ['/page/tools?sect=downpdf']
    },
];

export { versions, versionTable };