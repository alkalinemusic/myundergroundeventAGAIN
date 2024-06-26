import { Select, Space } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default function RadiusPicker({ setRadius }) {
  const handleChange = (value) => {
    console.log("value", value);
    setRadius(value);
  };
  return (
    <div>
      <div className="radius-input-header">
        <span className="radius-input-label">Radius</span>

        <div className="radius-picker">
          <Space wrap>
            <Select
              defaultValue="0"
              className=""
              style={{
                width: 294,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "0",
                  label: "0",
                },
                {
                  value: "1",
                  label: "1",
                },
                {
                  value: "5",
                  label: "5",
                },
                {
                  value: "10",
                  label: "10",
                },
                {
                  value: "25",
                  label: "25",
                },
                {
                  value: "50",
                  label: "50",
                },
                {
                  value: "100",
                  label: "100",
                },
              ]}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}
