package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "src/test/java/features",
		glue = {"stepDefinitions","utilities"},
		dryRun = false,
		monochrome = true,
		plugin = {"pretty", "html:reports/htmlreport","json:reports/report.json","junit:reports/xmlreport.xml" }
		
		)

public class TestRunnerA1 {

}
