
export const BudgetApp = () => {
  return (
    <>
      <section className="budget-app container">
        <aside className="budget-app__expenses">
          <form className="form">
            <label htmlFor="expense-name" className="form__label">Expense: </label>
            <input type="text" name="expense-name" placeholder="Expense Name" className="input-text" />
            <label htmlFor="expense-quantity" className="form__label">Quantity: </label>
            <input type="text" name="expense-quantity" placeholder="Quantity" className="input-text" />
            <input type="button" value="Add" className="btn btn--primary" />
          </form>
        </aside>
      </section>
    </>
  )
}
