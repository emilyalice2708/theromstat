feature 'viewing temperature' do
  before do
    visit('/')
  end

  it 'is 20 by default' do
    expect(page.find('#temperature')).to have_content '20'
  end

  it 'can be increased' do
    click_button("temp-up")
    expect(page.find('#temperature')).to have_content '21'
  end

  it 'can be decreased' do
    click_button("temp-down")
    expect(page.find('#temperature')).to have_content '19'
  end

  it 'can be reset' do
    click_button("temp-up")
    click_button("temp-reset")
    expect(page.find('#temperature')).to have_content '20'
  end
end