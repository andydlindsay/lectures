import { renderHook, act } from '@testing-library/react-hooks';
import useMousePosition from '../useMousePosition';

describe('useMousePosition tests', () => {

  test('should return an x key with an integer value', () => {
    const { result } = renderHook(() => useMousePosition());
    expect(result.current).toHaveProperty('x');
    expect(typeof result.current.x).toBe('number');
  });

  test('should return a y key with an integer value', () => {
    const { result } = renderHook(() => useMousePosition());
    expect(result.current).toHaveProperty('y');
    expect(typeof result.current.y).toBe('number');
  });

  test('should track mouse movement on the document', () => {
    const { result } = renderHook(() => useMousePosition());
    const coords = {
      clientX: 30,
      clientY: 70
    };
    const event = new MouseEvent('mousemove', coords);

    act(() => { document.dispatchEvent(event) });

    const { x, y } = result.current;

    expect(x).toBe(coords.clientX);
    expect(y).toBe(coords.clientY);
  });

});
