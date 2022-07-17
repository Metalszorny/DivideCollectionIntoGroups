module.exports = {
    /**
     * Divides a number collection into the given number of sub groups with relatevely equal number of items in each sub group.
     * @param {any} numberCollection The number collection to divide into groups.
     * @param {number} groupCount The number of groups to divide the input number collection.
     * @returns The collection of sub collections containing the divided numbers.
     */
    groupArrayElements: (numberCollection, groupCount) => {
        // If any of the input is incorrect, return an empty collection.
        if (!numberCollection || !numberCollection.length || groupCount == null || typeof groupCount !== 'number' || groupCount < 1) {
            return [];
        }

        // If the input collection is supposed to be divided to more groups then it's item count, return the input collection.
        if (numberCollection.length < groupCount) {
            return numberCollection;
        }

        const subGroupItemNumber = Math.ceil(numberCollection.length / groupCount);
        const result = [];

        for (let i = 0; i < groupCount; i += 1) {
            result.push(numberCollection.splice(0, subGroupItemNumber));
        }
      
        return result;
    },
};
