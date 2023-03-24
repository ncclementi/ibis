window.BENCHMARK_DATA = {
  "lastUpdate": 1679665157383,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b092de158fd4eff3f1448991c03327a05036789f",
          "message": "chore(deps): bump sqlglot version",
          "timestamp": "2023-03-24T09:28:48-04:00",
          "tree_id": "bdceb684352a0bd6b6f1b6102eed96cb7b50848e",
          "url": "https://github.com/ibis-project/ibis/commit/b092de158fd4eff3f1448991c03327a05036789f"
        },
        "date": 1679665077500,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 340.4366434250315,
            "unit": "iter/sec",
            "range": "stddev: 0.000023098347791401562",
            "extra": "mean: 2.9374041229501566 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 70.13673002581167,
            "unit": "iter/sec",
            "range": "stddev: 0.00777514425206227",
            "extra": "mean: 14.257864597222891 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.70711036817093,
            "unit": "iter/sec",
            "range": "stddev: 0.000571659489844688",
            "extra": "mean: 8.284516106382483 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 161.70632762012548,
            "unit": "iter/sec",
            "range": "stddev: 0.004435041015354116",
            "extra": "mean: 6.1840499052650735 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.54322764746622,
            "unit": "iter/sec",
            "range": "stddev: 0.0006662737503919007",
            "extra": "mean: 9.212919328766095 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5645698.383355463,
            "unit": "iter/sec",
            "range": "stddev: 1.4558815732602264e-8",
            "extra": "mean: 177.12600498588543 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 105.23998719391014,
            "unit": "iter/sec",
            "range": "stddev: 0.012056309906855673",
            "extra": "mean: 9.502091616159626 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6997280.331359943,
            "unit": "iter/sec",
            "range": "stddev: 4.763592684451508e-9",
            "extra": "mean: 142.9126678715659 nsec\nrounds: 68028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5226.2006409119895,
            "unit": "iter/sec",
            "range": "stddev: 0.000049020656158643426",
            "extra": "mean: 191.34359139826225 usec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5570.416048246173,
            "unit": "iter/sec",
            "range": "stddev: 0.00005115437898357019",
            "extra": "mean: 179.5198045063163 usec\nrounds: 3018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 785452.9284604106,
            "unit": "iter/sec",
            "range": "stddev: 2.5861229383714126e-7",
            "extra": "mean: 1.273150769149374 usec\nrounds: 22624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.82505917363,
            "unit": "iter/sec",
            "range": "stddev: 0.000024189975242499416",
            "extra": "mean: 1.8320888409080798 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13902.607764941013,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015881691058593583",
            "extra": "mean: 71.92895152532148 usec\nrounds: 1836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74551.2787227178,
            "unit": "iter/sec",
            "range": "stddev: 5.190504267900637e-7",
            "extra": "mean: 13.413586153489714 usec\nrounds: 12971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1999485.061248298,
            "unit": "iter/sec",
            "range": "stddev: 8.515062837621512e-8",
            "extra": "mean: 500.12876784170135 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6791857390562969,
            "unit": "iter/sec",
            "range": "stddev: 0.04424029015658279",
            "extra": "mean: 1.4723512913999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.13027449275389,
            "unit": "iter/sec",
            "range": "stddev: 0.0009426720758905062",
            "extra": "mean: 23.735900419352667 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7952197153195089,
            "unit": "iter/sec",
            "range": "stddev: 0.010827350779648713",
            "extra": "mean: 1.2575140942000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5311.217052809118,
            "unit": "iter/sec",
            "range": "stddev: 0.00005962031842436515",
            "extra": "mean: 188.28076315787112 usec\nrounds: 380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1165.2321457592104,
            "unit": "iter/sec",
            "range": "stddev: 0.000041995398353384066",
            "extra": "mean: 858.1980883718643 usec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1801.3175193783336,
            "unit": "iter/sec",
            "range": "stddev: 0.00000631864562972182",
            "extra": "mean: 555.1492111979888 usec\nrounds: 1411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5531.780017320871,
            "unit": "iter/sec",
            "range": "stddev: 0.00005409432953819026",
            "extra": "mean: 180.77363829885556 usec\nrounds: 423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.41910012338706,
            "unit": "iter/sec",
            "range": "stddev: 0.0004718362284358939",
            "extra": "mean: 22.01716892856455 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.97514035421705,
            "unit": "iter/sec",
            "range": "stddev: 0.0001898597365207291",
            "extra": "mean: 3.1448999405614626 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.8629675985315,
            "unit": "iter/sec",
            "range": "stddev: 0.00021826545923003286",
            "extra": "mean: 3.312761442569429 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 765.7674854934933,
            "unit": "iter/sec",
            "range": "stddev: 0.000011436235893571622",
            "extra": "mean: 1.3058794202466788 msec\nrounds: 652"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5652.621525251476,
            "unit": "iter/sec",
            "range": "stddev: 0.00002480154375469256",
            "extra": "mean: 176.90906697587747 usec\nrounds: 1508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.39964005329114,
            "unit": "iter/sec",
            "range": "stddev: 0.008310517496667249",
            "extra": "mean: 3.631086808270684 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.07165818376797,
            "unit": "iter/sec",
            "range": "stddev: 0.00037491444570825005",
            "extra": "mean: 39.88567459999217 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.05576099244583,
            "unit": "iter/sec",
            "range": "stddev: 0.0006449365475108004",
            "extra": "mean: 8.329462840712177 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5110.60122213481,
            "unit": "iter/sec",
            "range": "stddev: 0.000055625590527890344",
            "extra": "mean: 195.6716942947621 usec\nrounds: 3137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.54222784482873,
            "unit": "iter/sec",
            "range": "stddev: 0.0003344176336878192",
            "extra": "mean: 94.85661045454724 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.5113694154614,
            "unit": "iter/sec",
            "range": "stddev: 0.00022870278253024439",
            "extra": "mean: 3.220493993126574 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.568160337571,
            "unit": "iter/sec",
            "range": "stddev: 0.00067430610061696",
            "extra": "mean: 9.472553057686529 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6132628.50837069,
            "unit": "iter/sec",
            "range": "stddev: 8.880358518024283e-9",
            "extra": "mean: 163.06221689971093 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 318.61560092001474,
            "unit": "iter/sec",
            "range": "stddev: 0.00036441583607546915",
            "extra": "mean: 3.138578265196248 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.5248037987603,
            "unit": "iter/sec",
            "range": "stddev: 0.00005458779582487873",
            "extra": "mean: 1.4630046992331454 msec\nrounds: 522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.4172455316771,
            "unit": "iter/sec",
            "range": "stddev: 0.0005909277641892046",
            "extra": "mean: 8.30445834884123 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.18109190285312,
            "unit": "iter/sec",
            "range": "stddev: 0.02915529357176645",
            "extra": "mean: 26.89539087805176 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.5790730720244,
            "unit": "iter/sec",
            "range": "stddev: 0.000020404027586322075",
            "extra": "mean: 5.010545367344794 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 239.48516003963204,
            "unit": "iter/sec",
            "range": "stddev: 0.00395885247768509",
            "extra": "mean: 4.175624075556547 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.92024666685037,
            "unit": "iter/sec",
            "range": "stddev: 0.00013335051931001447",
            "extra": "mean: 6.137972538458423 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.84547899601228,
            "unit": "iter/sec",
            "range": "stddev: 0.00020208636944325453",
            "extra": "mean: 6.335309736842469 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.99151893062391,
            "unit": "iter/sec",
            "range": "stddev: 0.00014304288845808959",
            "extra": "mean: 9.901821564709307 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12146.190146818017,
            "unit": "iter/sec",
            "range": "stddev: 0.000015114082722411548",
            "extra": "mean: 82.33034292337122 usec\nrounds: 5144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1999551.9248238103,
            "unit": "iter/sec",
            "range": "stddev: 9.857265432336428e-8",
            "extra": "mean: 500.1120438960917 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.80850331781729,
            "unit": "iter/sec",
            "range": "stddev: 0.00046272684556674054",
            "extra": "mean: 15.921411069770286 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3763884770911448,
            "unit": "iter/sec",
            "range": "stddev: 0.001540872377311063",
            "extra": "mean: 420.8066187999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1670175514019508,
            "unit": "iter/sec",
            "range": "stddev: 0.14942739783044898",
            "extra": "mean: 5.987394687599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7081430223151182,
            "unit": "iter/sec",
            "range": "stddev: 0.0030815773301442213",
            "extra": "mean: 585.4310715999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5320.349410746773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000503033656207851",
            "extra": "mean: 187.9575800003027 usec\nrounds: 1700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.21603203405658,
            "unit": "iter/sec",
            "range": "stddev: 0.0007324389281652734",
            "extra": "mean: 9.78320112902463 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 143777.63309399298,
            "unit": "iter/sec",
            "range": "stddev: 3.480979360003926e-7",
            "extra": "mean: 6.955184742443642 usec\nrounds: 40321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 87.24379569980526,
            "unit": "iter/sec",
            "range": "stddev: 0.00029829675952196646",
            "extra": "mean: 11.462133117647381 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7999484774304286,
            "unit": "iter/sec",
            "range": "stddev: 0.013335776336871717",
            "extra": "mean: 1.2500805092000065 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.210848578859846,
            "unit": "iter/sec",
            "range": "stddev: 0.0007753098508632603",
            "extra": "mean: 22.618882743593545 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.24753276690592,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909268933919605",
            "extra": "mean: 9.592553161291283 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11421323.301503943,
            "unit": "iter/sec",
            "range": "stddev: 3.6579716890678537e-9",
            "extra": "mean: 87.55552868978818 nsec\nrounds: 108684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.46637335335015,
            "unit": "iter/sec",
            "range": "stddev: 0.00035305850068286307",
            "extra": "mean: 3.50303956383052 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 292.4854202665451,
            "unit": "iter/sec",
            "range": "stddev: 0.000041469081378848225",
            "extra": "mean: 3.418973838383771 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.34827343094689,
            "unit": "iter/sec",
            "range": "stddev: 0.0006461415616892308",
            "extra": "mean: 10.599028086421695 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.84965247631472,
            "unit": "iter/sec",
            "range": "stddev: 0.00024861561160060126",
            "extra": "mean: 9.021228101853277 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.57321053683202,
            "unit": "iter/sec",
            "range": "stddev: 0.0005826486020864017",
            "extra": "mean: 8.293716286956842 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.42067067658505,
            "unit": "iter/sec",
            "range": "stddev: 0.000039460952500501214",
            "extra": "mean: 7.224354535432531 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.542635784447343,
            "unit": "iter/sec",
            "range": "stddev: 0.004035188118928499",
            "extra": "mean: 180.41957633334013 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.41299398629835,
            "unit": "iter/sec",
            "range": "stddev: 0.0002470305331346573",
            "extra": "mean: 8.374298027522379 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12690.327065737803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015400617954090664",
            "extra": "mean: 78.80017550531595 usec\nrounds: 6826"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 108.55223707946749,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828824481997468",
            "extra": "mean: 9.212154690722157 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 312.10862833935255,
            "unit": "iter/sec",
            "range": "stddev: 0.0002162314992552954",
            "extra": "mean: 3.204012671231601 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 500733.7993989018,
            "unit": "iter/sec",
            "range": "stddev: 3.031488822899305e-7",
            "extra": "mean: 1.9970691037841553 usec\nrounds: 1997"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1862777.1616890107,
            "unit": "iter/sec",
            "range": "stddev: 1.134241098216091e-7",
            "extra": "mean: 536.8328646961097 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.92890294323425,
            "unit": "iter/sec",
            "range": "stddev: 0.000700987123636002",
            "extra": "mean: 8.934242842594097 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8445.066418963499,
            "unit": "iter/sec",
            "range": "stddev: 0.0000437900806785649",
            "extra": "mean: 118.41233098587452 usec\nrounds: 4544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 287.1627942870576,
            "unit": "iter/sec",
            "range": "stddev: 0.000026488711560408005",
            "extra": "mean: 3.482345275552537 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.2323834377102,
            "unit": "iter/sec",
            "range": "stddev: 0.0001367614949809367",
            "extra": "mean: 15.568471018512911 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8106949273171545,
            "unit": "iter/sec",
            "range": "stddev: 0.004059314138077531",
            "extra": "mean: 1.233509630200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.6242380652571,
            "unit": "iter/sec",
            "range": "stddev: 0.000060208588084982204",
            "extra": "mean: 6.3042067983873045 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.33248422741739,
            "unit": "iter/sec",
            "range": "stddev: 0.000320547769948219",
            "extra": "mean: 17.751746859999002 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5170.959476620303,
            "unit": "iter/sec",
            "range": "stddev: 0.00004960842644438756",
            "extra": "mean: 193.3877077399941 usec\nrounds: 2248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1970960.8076482723,
            "unit": "iter/sec",
            "range": "stddev: 6.538592524627277e-8",
            "extra": "mean: 507.36676047515556 nsec\nrounds: 172385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.84731114353723,
            "unit": "iter/sec",
            "range": "stddev: 0.0007741207719196984",
            "extra": "mean: 8.414157547007987 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.70271084112397,
            "unit": "iter/sec",
            "range": "stddev: 0.0006056358910898325",
            "extra": "mean: 8.718189767852229 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.9643422612849,
            "unit": "iter/sec",
            "range": "stddev: 0.00024898266819742775",
            "extra": "mean: 3.3226527517729694 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.20923795066108,
            "unit": "iter/sec",
            "range": "stddev: 0.0007137473456255317",
            "extra": "mean: 9.327554407766721 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.81898102780532,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713918804102717",
            "extra": "mean: 10.546411585110302 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.546051019519332,
            "unit": "iter/sec",
            "range": "stddev: 0.0011556676272236656",
            "extra": "mean: 64.3250172500025 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5616.699940998451,
            "unit": "iter/sec",
            "range": "stddev: 0.00004795037959669121",
            "extra": "mean: 178.04048827686447 usec\nrounds: 2431"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.53143278444499,
            "unit": "iter/sec",
            "range": "stddev: 0.019602062806589163",
            "extra": "mean: 11.691608189473277 msec\nrounds: 95"
          }
        ]
      }
    ]
  }
}