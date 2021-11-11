import { useState, useEffect, useRef } from "react";
import { IoMdClose, IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "features/create-modal/sectionsSlice";
import { nanoid } from "nanoid";

export default function CreateModal() {
  const [titleValue, setTitleValue] = useState("Заголовок");
  const [sectionNumber, setSectionNumber] = useState(0);
  const [modalWidth, setModalWidth] = useState(1000)

  const sections = useSelector((state) => state.sections);
  const dispatch = useDispatch();

  const addSection = () => {
    setSectionNumber(sectionNumber + 1);
    dispatch(
      add({
        id: `s_${nanoid(10)}`,
      })
    );
  };

  const removeSection = (id) => {
    dispatch(del(id));
  };

  const changeModalWidth = (e) => {
    setModalWidth(e.target.value)
  }

  return (
    <div className="page">
      <h1>Create Modal</h1>
      <div className="cr">
        <div className="cr-block cr-options">
          <div className="cr-block__title">Опции</div>
          <div className="cr-options__list">
            <div className="cr-opt">
              Изменить размер
              <input type="number" min="200" max="1000" onChange={e => changeModalWidth(e)} value={modalWidth} />
            </div>
            <div className="cr-opt">
              <button onClick={addSection} className="cr-opt__label">
                Добавить секцию
              </button>
            </div>
          </div>
        </div>
        <div className="cr-block cr-result">
          <div className="cr-modal" style={{
            width: `${modalWidth}px`
          }}>
            <div className="cr-modal-header">
              <div className="cr-modal-header__title">
                <input
                  maxLength="30"
                  type="text"
                  className="cr-edit-title"
                  onChange={(e) => setTitleValue(e.target.value)}
                  value={titleValue}
                />
              </div>
              <div className="cr-modal-header__close-btn">
                <IoMdClose size="1.4rem" />
              </div>
            </div>
            <div className="cr-modal-content">
              <div className="cr-modal-body">
                {sections.length > 0 && (
                  <div className="cr-modal-sections">
                    {sections.map((section) => (
                      <section
                        className="cr-modal-section"
                        data-section-id={section.payload.id}
                        key={section.payload.id}
                      >
                        <div className="cr-id-section">
                          {section.payload.id}
                        </div>
                        <div
                          className="cr-delete-section"
                          onClick={() => removeSection(section.payload.id)}
                        >
                          <IoMdTrash />
                        </div>
                      </section>
                    ))}
                  </div>
                )}
              </div>
              <div className="cr-modal-footer"></div>
            </div>
          </div>
        </div>
        <div className="cr-block cr-elements">
          <div className="cr-block__title">Элементы</div>
          <div className="cr-elements__list">
            <div className="cr-el cr-el-section">
              <div className="cr-el__label">Секция</div>
            </div>
            <div className="cr-el cr-el-section">
              <div className="cr-el__label">Кнопка</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
