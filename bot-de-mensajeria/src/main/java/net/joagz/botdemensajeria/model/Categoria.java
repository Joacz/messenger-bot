package net.joagz.botdemensajeria.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import net.joagz.botdemensajeria.model.Usuario;

@Entity
@Table(name = "categorias")
public class Categoria {

  private Integer id;
  private String nombre;
  private Usuario usuario;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public Usuario getUsuario() {
    return usuario;
  }

  public void setUsuario(Usuario usuario) {
    this.usuario = usuario;
  }

}
