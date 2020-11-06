feature 'power saving' do
  it 'is on by default' do
    visit('/')
    expect(page).to have_content("POWER SAVING MODE ON")
  end

  it 'can be turned off' do
    visit('/')
    click_button("psm-off")
    expect(page).to have_content("POWER SAVING MODE OFF")
  end

  context 'power saving mode is on' do
    it 'has a max temp of 25' do
      visit('/')
      6.times { click_button("temp-up") }
      expect(page.find('#temperature')).to have_content '25'
    end

    it 'lowers temp if over 25' do
      visit('/')
      click_button("psm-off")
      6.times { click_button("temp-up") }
      click_button("psm-on")
      expect(page.find('#temperature')).to have_content '25'
    end
  end

  context 'power saving mode is off' do
    it 'has a max temp of 32' do
      visit('/')
      click_button("psm-off")
      13.times { click_button("temp-up") }
      expect(page.find('#temperature')).to have_content '32'
    end
  end
end