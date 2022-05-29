# click on submit button
    submit = driver.find_element_by_xpath(
        '//*[@id="mG61Hd"]/div[2]/div/div[3]/div[1]/div/div/span/span')
    submit.click()
 
    # fill another response
    another_response = driver.find_element_by_xpath(
        '/html/body/div[1]/div[2]/div[1]/div/div[4]/a')
    another_response.click()