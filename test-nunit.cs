using NUnit.Framework;

[TestFixture]
public class CalculatorTests
{
    private Calculator _calculator;

    [SetUp]
    public void Setup()
    {
        _calculator = new Calculator();
    }

    [Test]
    public void Add_WhenCalled_ReturnsSumOfArguments()
    {
        var result = _calculator.Add(1, 2);

        Assert.That(result, Is.EqualTo(3));
    }
}