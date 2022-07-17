const { groupArrayElements } = require('../src/index');

/**
 * Unit tests for the group array elements function.
 */
describe('GroupArrayElementsTests', () => {
    /**
     * The groupArrayElements function should return the example result when called with the example input.
     */
    it('test_groupArrayElements_Should_ReturnTheExampleResult_When_CalledWithTheExampleInput', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4, 5];
        const groupCount = 3;
        const expectedResult = [[1, 2], [3, 4], [5]];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with zero as the group count.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithZeroGroupCount', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4, 5];
        const groupCount = 0;
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with negative as the group count.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithNegativeGroupCount', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4, 5];
        const groupCount = -1;
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with null as the group count.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithNullGroupCount', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4, 5];
        const groupCount = null;
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with undefined as the group count.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithUndefinedGroupCount', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4, 5];
        const groupCount = undefined;
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with non number as the group count.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithNonNumberGroupCount', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4, 5];
        const groupCount = '3';
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with an empty number collection.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithEmptyNumberCollection', () => {
        // Arrange.
        const inputCollection = [];
        const groupCount = 3;
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with null as the number collection.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithNullNumberCollection', () => {
        // Arrange.
        const inputCollection = null;
        const groupCount = 3;
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return an empty collection when called with undefined as the number collection.
     */
    it('test_groupArrayElements_Should_ReturnAnEmptyCollection_When_CalledWithUndefinedNumberCollection', () => {
        // Arrange.
        const inputCollection = undefined;
        const groupCount = 3;
        const expectedResult = [];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return number element in sub-group when called with single element collection and division to one.
     */
    it('test_groupArrayElements_Should_ReturnNumberElementInSubGroup_When_CalledWithSignleElementCollectionAndDivisionToOne', () => {
        // Arrange.
        const inputCollection = [1];
        const groupCount = 1;
        const expectedResult = [[1]];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return text element in sub-group when called with single element collection and division to one.
     */
    it('test_groupArrayElements_Should_ReturnTextElementInSubGroup_When_CalledWithSignleElementCollectionAndDivisionToOne', () => {
        // Arrange.
        const inputCollection = ['1'];
        const groupCount = 1;
        const expectedResult = [['1']];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return the original collection when called with less elements then groups.
     */
    it('test_groupArrayElements_Should_ReturnTheOriginalCollection_When_CalledWithLessElementsThenGroups', () => {
        // Arrange.
        const inputCollection = [1];
        const groupCount = 2;
        const expectedResult = [1];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return number elements in sub-group when called with division to one.
     */
    it('test_groupArrayElements_Should_ReturnNumberElementsInSubGroup_When_CalledWithDivisionToOne', () => {
        // Arrange.
        const inputCollection = [1, 2, 3];
        const groupCount = 1;
        const expectedResult = [[1, 2, 3]];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return two and one element sub-groups when called with three element collection and division to two.
     */
    it('test_groupArrayElements_Should_ReturnTwoAndOneElementSubGroups_When_CalledWithThreeElementCollectionAndDivisionToTwo', () => {
        // Arrange.
        const inputCollection = [1, 2, 3];
        const groupCount = 2;
        const expectedResult = [[1, 2], [3]];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return two and two element sub-groups when called with four element collection and division to two.
     */
    it('test_groupArrayElements_Should_ReturnTwoAndTwoElementSubGroups_When_CalledWithFourElementCollectionDivisionToTwo', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4];
        const groupCount = 2;
        const expectedResult = [[1, 2], [3, 4]];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return three and two element sub-groups when called with five element collection and division to two.
     */
    it('test_groupArrayElements_Should_ReturnThreeAndTwoElementSubGroups_When_CalledWithFiveElementCollectionAndDivisionToTwo', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4, 5];
        const groupCount = 2;
        const expectedResult = [[1, 2, 3], [4, 5]];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });

    /**
     * The groupArrayElements function should return one, one and two element sub-groups when called with four element collection and division to three.
     */
    it('test_groupArrayElements_Should_ReturnOneAndOneAndTwoElementSubGroups_When_CalledWithFourElementCollectionAndDivisionToThree', () => {
        // Arrange.
        const inputCollection = [1, 2, 3, 4];
        const groupCount = 3;
        const expectedResult = [[1, 2], [3, 4], []];
        
        // Act.
        const actualResult = groupArrayElements(inputCollection, groupCount);
        
        // Assert.
        expect(actualResult).toStrictEqual(expectedResult);
    });
});
