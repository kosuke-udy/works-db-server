export const query = {
    getWorks: (parent: any, args: any, context: any) => {
        let result = context.works.find((v: any) => v.id === args.id);
        return [result];
    },
};