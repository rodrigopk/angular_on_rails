require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

RSpec.describe BooksController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # Book. As you add validations to Book, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    FactoryGirl.build(:book).attributes
  }

  let(:invalid_attributes) {
    FactoryGirl.build(:book, name: nil).attributes
  }

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # BooksController. Be sure to keep this updated too.
  let(:valid_session) { {} }

  describe "GET #index" do
    it "assigns all books as @books" do
      book = Book.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(assigns(:books)).to eq([book])
    end
  end

  describe "GET #show" do
    it "assigns the requested book as @book" do
      book = Book.create! valid_attributes
      get :show, params: {id: book.to_param}, session: valid_session
      expect(assigns(:book)).to eq(book)
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Book" do
        expect {
          post :create, params: {book: valid_attributes}, session: valid_session
        }.to change(Book, :count).by(1)
      end

      it "assigns a newly created book as @book" do
        post :create, params: {book: valid_attributes}, session: valid_session
        expect(assigns(:book)).to be_a(Book)
        expect(assigns(:book)).to be_persisted
      end
    end

    context "with invalid params" do
      it "assigns a newly created but unsaved book as @book" do
        post :create, params: {book: invalid_attributes}, session: valid_session
        expect(assigns(:book)).to be_a_new(Book)
      end

    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        valid_attributes.merge(name: "New name")
      }

      it "updates the requested book" do
        book = Book.create! valid_attributes
        put :update, params: {id: book.to_param, book: new_attributes}, session: valid_session
        book.reload
        expect(assigns(:book).name).to eq("New name")
      end

      it "assigns the requested book as @book" do
        book = Book.create! valid_attributes
        put :update, params: {id: book.to_param, book: valid_attributes}, session: valid_session
        expect(assigns(:book)).to eq(book)
      end
    end

    context "with invalid params" do
      it "assigns the book as @book" do
        book = Book.create! valid_attributes
        put :update, params: {id: book.to_param, book: invalid_attributes}, session: valid_session
        expect(assigns(:book)).to eq(book)
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested book" do
      book = Book.create! valid_attributes
      expect {
        delete :destroy, params: {id: book.to_param}, session: valid_session
      }.to change(Book, :count).by(-1)
    end
  end

end
