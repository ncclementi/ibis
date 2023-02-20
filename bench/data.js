window.BENCHMARK_DATA = {
  "lastUpdate": 1676912455410,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "5a242fc88a25a13664afb2fbdc7ea83c7a0d6e5f",
          "message": "chore(deps): bump cryptography from 38.0.4 to 39.0.1",
          "timestamp": "2023-02-20T17:54:19+01:00",
          "tree_id": "423c5c5afeca08acb7d4e6fe95b9d90c7e846528",
          "url": "https://github.com/ibis-project/ibis/commit/5a242fc88a25a13664afb2fbdc7ea83c7a0d6e5f"
        },
        "date": 1676912371146,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 254.40778497317459,
            "unit": "iter/sec",
            "range": "stddev: 0.00024542649232162295",
            "extra": "mean: 3.930697325576898 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 193.2152085053166,
            "unit": "iter/sec",
            "range": "stddev: 0.007782759074508326",
            "extra": "mean: 5.1755760208311115 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 557486.6780310645,
            "unit": "iter/sec",
            "range": "stddev: 2.9341356855581344e-7",
            "extra": "mean: 1.7937648367344083 usec\nrounds: 20203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 71.6674123145885,
            "unit": "iter/sec",
            "range": "stddev: 0.0005083752297032865",
            "extra": "mean: 13.95334319607409 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 318.9397833675127,
            "unit": "iter/sec",
            "range": "stddev: 0.000043877305921129385",
            "extra": "mean: 3.1353880956509745 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8589918357931751,
            "unit": "iter/sec",
            "range": "stddev: 0.003979081559412453",
            "extra": "mean: 1.1641554184000142 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 355446.96435759484,
            "unit": "iter/sec",
            "range": "stddev: 2.1691692692064769e-7",
            "extra": "mean: 2.8133592357647967 usec\nrounds: 785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4261.504677629069,
            "unit": "iter/sec",
            "range": "stddev: 0.00007775273705917675",
            "extra": "mean: 234.6589000006355 usec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 54.18972583539973,
            "unit": "iter/sec",
            "range": "stddev: 0.014539232715724208",
            "extra": "mean: 18.453682586206124 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 88.29391981390643,
            "unit": "iter/sec",
            "range": "stddev: 0.00009323536039662102",
            "extra": "mean: 11.32580818823833 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 71.71577593982147,
            "unit": "iter/sec",
            "range": "stddev: 0.0005307559702976",
            "extra": "mean: 13.943933352113842 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3980.643785636178,
            "unit": "iter/sec",
            "range": "stddev: 0.000051371681433019305",
            "extra": "mean: 251.21564597375348 usec\nrounds: 2223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.869410261409083,
            "unit": "iter/sec",
            "range": "stddev: 0.0012538230305178832",
            "extra": "mean: 205.3636777999941 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 67.37327054121299,
            "unit": "iter/sec",
            "range": "stddev: 0.0005633460618886191",
            "extra": "mean: 14.842681555562732 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 70.12047567216219,
            "unit": "iter/sec",
            "range": "stddev: 0.000570255906734689",
            "extra": "mean: 14.261169657139103 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 989.7439941844262,
            "unit": "iter/sec",
            "range": "stddev: 0.000014466470259731018",
            "extra": "mean: 1.0103622814342257 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.59802986224585,
            "unit": "iter/sec",
            "range": "stddev: 0.02066088665849411",
            "extra": "mean: 33.78603253845496 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 68.99241238694833,
            "unit": "iter/sec",
            "range": "stddev: 0.0006456200230673016",
            "extra": "mean: 14.49434750000386 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4541352.002922127,
            "unit": "iter/sec",
            "range": "stddev: 1.242012916366934e-8",
            "extra": "mean: 220.19874243523157 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4423.357820959257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007724853102624242",
            "extra": "mean: 226.07259925066117 usec\nrounds: 1869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6296.079431388486,
            "unit": "iter/sec",
            "range": "stddev: 0.000015541759687690514",
            "extra": "mean: 158.82899999872907 usec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.06714674616065,
            "unit": "iter/sec",
            "range": "stddev: 0.000511729584988643",
            "extra": "mean: 110.28827788889986 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.45438906559204,
            "unit": "iter/sec",
            "range": "stddev: 0.016552073391394462",
            "extra": "mean: 30.81247340626092 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 272.85455112391486,
            "unit": "iter/sec",
            "range": "stddev: 0.00011104515366223515",
            "extra": "mean: 3.664956277551176 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8554740754557851,
            "unit": "iter/sec",
            "range": "stddev: 0.0029987770841763996",
            "extra": "mean: 1.1689424947999896 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3982.9989504713244,
            "unit": "iter/sec",
            "range": "stddev: 0.000050248902871509765",
            "extra": "mean: 251.0671010550143 usec\nrounds: 1801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.28181773440801,
            "unit": "iter/sec",
            "range": "stddev: 0.0003902160729616759",
            "extra": "mean: 38.0491185999972 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 68.14369790396478,
            "unit": "iter/sec",
            "range": "stddev: 0.0005151522037382988",
            "extra": "mean: 14.674871349208322 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1996802.962435422,
            "unit": "iter/sec",
            "range": "stddev: 4.18209135664496e-8",
            "extra": "mean: 500.8005390678673 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 70.89274568246995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006538123945797043",
            "extra": "mean: 14.105815628569676 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7340793299224212,
            "unit": "iter/sec",
            "range": "stddev: 0.0034458650787192657",
            "extra": "mean: 1.362250589600012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15104284680376243,
            "unit": "iter/sec",
            "range": "stddev: 0.05711160929969534",
            "extra": "mean: 6.620637926000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.37184465527773,
            "unit": "iter/sec",
            "range": "stddev: 0.00011335355181887455",
            "extra": "mean: 10.269909166661742 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.04402222792112,
            "unit": "iter/sec",
            "range": "stddev: 0.0002131579666624678",
            "extra": "mean: 3.9833651131199095 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 262.01350421531265,
            "unit": "iter/sec",
            "range": "stddev: 0.0002136528038726646",
            "extra": "mean: 3.8165971749999508 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10952.756336995546,
            "unit": "iter/sec",
            "range": "stddev: 0.000001681441076270738",
            "extra": "mean: 91.30121854553283 usec\nrounds: 5198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 230.95280938348162,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563470408987927",
            "extra": "mean: 4.329888875002023 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120031.33169396935,
            "unit": "iter/sec",
            "range": "stddev: 3.551356564312677e-7",
            "extra": "mean: 8.331158089202825 usec\nrounds: 35461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 68.59599299250732,
            "unit": "iter/sec",
            "range": "stddev: 0.000565691415902337",
            "extra": "mean: 14.578111000000089 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.55789157143457,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378139651031713",
            "extra": "mean: 14.376513971430832 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 558.6609637820145,
            "unit": "iter/sec",
            "range": "stddev: 0.000044338551479709875",
            "extra": "mean: 1.7899944059635295 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.25546035721239,
            "unit": "iter/sec",
            "range": "stddev: 0.00007303459312302848",
            "extra": "mean: 14.650842507933248 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 142.5258472720855,
            "unit": "iter/sec",
            "range": "stddev: 0.000033628882845740934",
            "extra": "mean: 7.01627121774603 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.46000667497782,
            "unit": "iter/sec",
            "range": "stddev: 0.0005444647517489163",
            "extra": "mean: 14.823597703125024 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.98626519524686,
            "unit": "iter/sec",
            "range": "stddev: 0.0001850683580927157",
            "extra": "mean: 23.263244560976034 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 55033.50556247997,
            "unit": "iter/sec",
            "range": "stddev: 5.723231090849419e-7",
            "extra": "mean: 18.170748706252997 usec\nrounds: 12563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 255.84621854757057,
            "unit": "iter/sec",
            "range": "stddev: 0.00020089021583252547",
            "extra": "mean: 3.9085979291660538 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.76597505836564,
            "unit": "iter/sec",
            "range": "stddev: 0.00034128663090907124",
            "extra": "mean: 17.93208132653258 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1604451.616415748,
            "unit": "iter/sec",
            "range": "stddev: 9.72829236583276e-8",
            "extra": "mean: 623.2659120216676 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1452.6158378314992,
            "unit": "iter/sec",
            "range": "stddev: 0.000005844166479176883",
            "extra": "mean: 688.4132569371022 usec\nrounds: 1117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.32682798754684,
            "unit": "iter/sec",
            "range": "stddev: 0.00011886307758177667",
            "extra": "mean: 13.826128254541718 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 261.05722651789836,
            "unit": "iter/sec",
            "range": "stddev: 0.0001930850773565071",
            "extra": "mean: 3.830577737067313 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12689596.446534563,
            "unit": "iter/sec",
            "range": "stddev: 3.0403765077341217e-9",
            "extra": "mean: 78.80471252277681 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.21983523920581,
            "unit": "iter/sec",
            "range": "stddev: 0.0005541477112999878",
            "extra": "mean: 15.817820407413045 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 66.82506136712429,
            "unit": "iter/sec",
            "range": "stddev: 0.0005272118103882555",
            "extra": "mean: 14.964445666666707 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.47321601575749,
            "unit": "iter/sec",
            "range": "stddev: 0.00004547198919238124",
            "extra": "mean: 10.585010674699662 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2084246319449115,
            "unit": "iter/sec",
            "range": "stddev: 0.0020790964863666916",
            "extra": "mean: 452.81146819999094 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 71.67472921705159,
            "unit": "iter/sec",
            "range": "stddev: 0.0005470434496582818",
            "extra": "mean: 13.951918771422406 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4407419.313377047,
            "unit": "iter/sec",
            "range": "stddev: 1.0453120243674952e-8",
            "extra": "mean: 226.89014339210576 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.466031299296219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011145731041403086",
            "extra": "mean: 74.26092942857362 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.72008514129347,
            "unit": "iter/sec",
            "range": "stddev: 0.000609683760238773",
            "extra": "mean: 22.87278253846545 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 96.42883042780957,
            "unit": "iter/sec",
            "range": "stddev: 0.00008837373106020268",
            "extra": "mean: 10.370342516480477 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.5285726789336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000619759479332284",
            "extra": "mean: 8.366200462261904 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 267.6295530035714,
            "unit": "iter/sec",
            "range": "stddev: 0.000014562992519166884",
            "extra": "mean: 3.7365081276605334 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10164.687374914409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015308079071122922",
            "extra": "mean: 98.37980875515322 usec\nrounds: 4706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 438.80756719613686,
            "unit": "iter/sec",
            "range": "stddev: 0.000035089193382370124",
            "extra": "mean: 2.278903270492195 msec\nrounds: 366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4415.14440768714,
            "unit": "iter/sec",
            "range": "stddev: 0.00005106109675287902",
            "extra": "mean: 226.49315801741733 usec\nrounds: 2120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1978954.6929178915,
            "unit": "iter/sec",
            "range": "stddev: 5.661607643112129e-8",
            "extra": "mean: 505.31727865152754 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 629.3398087218804,
            "unit": "iter/sec",
            "range": "stddev: 0.000011796536969432723",
            "extra": "mean: 1.5889667015199458 msec\nrounds: 526"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5425865.741515057,
            "unit": "iter/sec",
            "range": "stddev: 4.671812732811095e-9",
            "extra": "mean: 184.30238558038846 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5817145519810561,
            "unit": "iter/sec",
            "range": "stddev: 0.0006346608326750768",
            "extra": "mean: 1.7190561876000061 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9162.569950334333,
            "unit": "iter/sec",
            "range": "stddev: 0.000012155262565574747",
            "extra": "mean: 109.13968519973056 usec\nrounds: 3939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 75.90816209738554,
            "unit": "iter/sec",
            "range": "stddev: 0.00017513872796746688",
            "extra": "mean: 13.173813887326913 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4448.708662977158,
            "unit": "iter/sec",
            "range": "stddev: 0.00004948334155909466",
            "extra": "mean: 224.78433086035835 usec\nrounds: 2022"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.68198956830572,
            "unit": "iter/sec",
            "range": "stddev: 0.00008780670260742477",
            "extra": "mean: 11.404850698796968 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 71.53645149205198,
            "unit": "iter/sec",
            "range": "stddev: 0.000587517299062351",
            "extra": "mean: 13.978887394367113 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4414.179711773413,
            "unit": "iter/sec",
            "range": "stddev: 0.000025960658618591375",
            "extra": "mean: 226.54265691376807 usec\nrounds: 2119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 69.29956976867875,
            "unit": "iter/sec",
            "range": "stddev: 0.00007117491361142334",
            "extra": "mean: 14.430104015623613 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3963.4154927088266,
            "unit": "iter/sec",
            "range": "stddev: 0.000052735669830315945",
            "extra": "mean: 252.3076376523276 usec\nrounds: 2045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5540757332845039,
            "unit": "iter/sec",
            "range": "stddev: 0.001647999844993476",
            "extra": "mean: 643.4692844000097 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1544816.3635828777,
            "unit": "iter/sec",
            "range": "stddev: 9.316423354369115e-8",
            "extra": "mean: 647.3261311659786 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.69402808749567,
            "unit": "iter/sec",
            "range": "stddev: 0.0001553078781653081",
            "extra": "mean: 5.999015150531441 msec\nrounds: 93"
          }
        ]
      }
    ]
  }
}