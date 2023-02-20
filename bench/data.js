window.BENCHMARK_DATA = {
  "lastUpdate": 1676912833814,
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
      },
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "ab3712fc9747cb1001c088c5244037dc4c9b5d02",
          "message": "refactor(analysis): slightly simplify `find_subqueries()`",
          "timestamp": "2023-02-20T17:54:52+01:00",
          "tree_id": "2572fc1c22f3b090c9daa5b442fd03e62b687eb4",
          "url": "https://github.com/ibis-project/ibis/commit/ab3712fc9747cb1001c088c5244037dc4c9b5d02"
        },
        "date": 1676912745280,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2192.046297635407,
            "unit": "iter/sec",
            "range": "stddev: 0.00022324547041204467",
            "extra": "mean: 456.19474418889547 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 40.03068374326631,
            "unit": "iter/sec",
            "range": "stddev: 0.020465343525800924",
            "extra": "mean: 24.980837359996713 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.1293615572921,
            "unit": "iter/sec",
            "range": "stddev: 0.001443496475535932",
            "extra": "mean: 12.325993706900034 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 5.895478385719513,
            "unit": "iter/sec",
            "range": "stddev: 0.011164142795388151",
            "extra": "mean: 169.62151916666812 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 142.13746354855286,
            "unit": "iter/sec",
            "range": "stddev: 0.011949339500604913",
            "extra": "mean: 7.035442838463268 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.005020269044683,
            "unit": "iter/sec",
            "range": "stddev: 0.003520066373149626",
            "extra": "mean: 99.94982250000817 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 188.14815330048916,
            "unit": "iter/sec",
            "range": "stddev: 0.0005121340123894764",
            "extra": "mean: 5.31496048437378 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2688.3114707455456,
            "unit": "iter/sec",
            "range": "stddev: 0.00012040150250586152",
            "extra": "mean: 371.9807064330501 usec\nrounds: 1710"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.31133349106587,
            "unit": "iter/sec",
            "range": "stddev: 0.0027650351760088354",
            "extra": "mean: 26.10193665624294 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 55.42754668623585,
            "unit": "iter/sec",
            "range": "stddev: 0.0025075025275867373",
            "extra": "mean: 18.0415706590948 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.8988727703820792,
            "unit": "iter/sec",
            "range": "stddev: 0.046041574349842976",
            "extra": "mean: 1.1125044977999892 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.0718427385721,
            "unit": "iter/sec",
            "range": "stddev: 0.028440795872669265",
            "extra": "mean: 39.88538099999874 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 114.52523964766492,
            "unit": "iter/sec",
            "range": "stddev: 0.001268069571576969",
            "extra": "mean: 8.731699694115322 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.49531969331546,
            "unit": "iter/sec",
            "range": "stddev: 0.0012452771523171044",
            "extra": "mean: 15.749192299999969 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 63.90086042219961,
            "unit": "iter/sec",
            "range": "stddev: 0.0005705318570159831",
            "extra": "mean: 15.649241550002559 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 58.76487233381956,
            "unit": "iter/sec",
            "range": "stddev: 0.0016782762740030165",
            "extra": "mean: 17.01696881632624 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5105039473797763,
            "unit": "iter/sec",
            "range": "stddev: 0.019162675179025066",
            "extra": "mean: 1.9588487124000153 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2971.4462648373483,
            "unit": "iter/sec",
            "range": "stddev: 0.00007294583881905042",
            "extra": "mean: 336.53645762789466 usec\nrounds: 1475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 100.5057247056021,
            "unit": "iter/sec",
            "range": "stddev: 0.022596932753191985",
            "extra": "mean: 9.949681999997168 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4579836161166479,
            "unit": "iter/sec",
            "range": "stddev: 0.03503777948865629",
            "extra": "mean: 2.183484222600009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1350491.6520686767,
            "unit": "iter/sec",
            "range": "stddev: 0.000001469153053001916",
            "extra": "mean: 740.4710710119568 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 226.90210896099373,
            "unit": "iter/sec",
            "range": "stddev: 0.00025014963437141284",
            "extra": "mean: 4.407186890325061 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 69.91826650783095,
            "unit": "iter/sec",
            "range": "stddev: 0.001581926800835805",
            "extra": "mean: 14.302414089285216 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10122579.851590471,
            "unit": "iter/sec",
            "range": "stddev: 5.766023736706591e-8",
            "extra": "mean: 98.78904534827502 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 82.25300938017757,
            "unit": "iter/sec",
            "range": "stddev: 0.0006547560096296758",
            "extra": "mean: 12.15760988607662 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08400020615397802,
            "unit": "iter/sec",
            "range": "stddev: 0.19078773447117559",
            "extra": "mean: 11.90473268799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.90542163489119,
            "unit": "iter/sec",
            "range": "stddev: 0.002051510221665557",
            "extra": "mean: 37.16723021739199 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1357353.9332701825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015679554253263347",
            "extra": "mean: 736.7275221951629 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 105651.54335150105,
            "unit": "iter/sec",
            "range": "stddev: 0.000004908479349948276",
            "extra": "mean: 9.46507706634266 usec\nrounds: 24213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 58.90247794174169,
            "unit": "iter/sec",
            "range": "stddev: 0.018778078814933062",
            "extra": "mean: 16.977214455885264 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 66.95372098927483,
            "unit": "iter/sec",
            "range": "stddev: 0.0012313627255352978",
            "extra": "mean: 14.935689685718705 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4332479029701062,
            "unit": "iter/sec",
            "range": "stddev: 0.010942145406085731",
            "extra": "mean: 2.3081473519999918 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 123.55324100588243,
            "unit": "iter/sec",
            "range": "stddev: 0.0005534613275153999",
            "extra": "mean: 8.093676797619494 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 52686.829754581355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065258564928255604",
            "extra": "mean: 18.98007537477704 usec\nrounds: 12020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3663650.8782470664,
            "unit": "iter/sec",
            "range": "stddev: 0.000001018820116540445",
            "extra": "mean: 272.9517722164126 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 179.16342694514543,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909249768677848",
            "extra": "mean: 5.5814962743828875 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2615.511389035464,
            "unit": "iter/sec",
            "range": "stddev: 0.00013524777903156787",
            "extra": "mean: 382.3344085566285 usec\nrounds: 1706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2931.458195509319,
            "unit": "iter/sec",
            "range": "stddev: 0.00004835111560597352",
            "extra": "mean: 341.127156966418 usec\nrounds: 962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 54.918611156013874,
            "unit": "iter/sec",
            "range": "stddev: 0.0010242531821102261",
            "extra": "mean: 18.208763458332555 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 55.03936239760985,
            "unit": "iter/sec",
            "range": "stddev: 0.001277271778834636",
            "extra": "mean: 18.16881512499909 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.34928073368304,
            "unit": "iter/sec",
            "range": "stddev: 0.0010434013095015388",
            "extra": "mean: 17.74645544680831 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.394929706106787,
            "unit": "iter/sec",
            "range": "stddev: 0.0008470971021148128",
            "extra": "mean: 51.55986719998964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8681.277025499707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002732973218169623",
            "extra": "mean: 115.19042613922788 usec\nrounds: 4874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 65.29866116635031,
            "unit": "iter/sec",
            "range": "stddev: 0.0016827572861339733",
            "extra": "mean: 15.314249666658093 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 56.050836789124055,
            "unit": "iter/sec",
            "range": "stddev: 0.0013375838192372213",
            "extra": "mean: 17.84094684905823 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 311287.0339317305,
            "unit": "iter/sec",
            "range": "stddev: 0.000003104308681622681",
            "extra": "mean: 3.212469171521335 usec\nrounds: 1784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 184.10533496974472,
            "unit": "iter/sec",
            "range": "stddev: 0.0003845318693846237",
            "extra": "mean: 5.4316731243249246 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.0501218256669,
            "unit": "iter/sec",
            "range": "stddev: 0.003507785513253332",
            "extra": "mean: 38.387536407400255 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 67.19579753389948,
            "unit": "iter/sec",
            "range": "stddev: 0.0007768704950401483",
            "extra": "mean: 14.881883044776897 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.7012852674598875,
            "unit": "iter/sec",
            "range": "stddev: 0.016301404386685946",
            "extra": "mean: 270.1764191999928 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2833.6998769371185,
            "unit": "iter/sec",
            "range": "stddev: 0.00019006493314819954",
            "extra": "mean: 352.8955229658538 usec\nrounds: 1807"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 153.10779326047503,
            "unit": "iter/sec",
            "range": "stddev: 0.013535415161447094",
            "extra": "mean: 6.531346175819721 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1174.6750417610547,
            "unit": "iter/sec",
            "range": "stddev: 0.00010839463460080414",
            "extra": "mean: 851.2992652851597 usec\nrounds: 916"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6321.248561494335,
            "unit": "iter/sec",
            "range": "stddev: 0.00005656325222921987",
            "extra": "mean: 158.19659522510554 usec\nrounds: 3308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 69.0383240721882,
            "unit": "iter/sec",
            "range": "stddev: 0.001674093737564384",
            "extra": "mean: 14.484708507036974 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8102.058786116272,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330779970004324",
            "extra": "mean: 123.42541894581227 usec\nrounds: 5046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1548958.08844546,
            "unit": "iter/sec",
            "range": "stddev: 7.676681012620274e-7",
            "extra": "mean: 645.5952601039088 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 172.57188294997053,
            "unit": "iter/sec",
            "range": "stddev: 0.0005292976588843602",
            "extra": "mean: 5.7946867294129545 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.43246292716605,
            "unit": "iter/sec",
            "range": "stddev: 0.0013873609222368273",
            "extra": "mean: 20.22962120000784 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 500.7654452015129,
            "unit": "iter/sec",
            "range": "stddev: 0.00035078821485208896",
            "extra": "mean: 1.9969428992801015 msec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 219.0279341370558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007072308952536495",
            "extra": "mean: 4.565627685527336 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5128619256582848,
            "unit": "iter/sec",
            "range": "stddev: 0.02138358910910538",
            "extra": "mean: 1.9498425404000272 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 522598.77403483883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017561422172396385",
            "extra": "mean: 1.9135138651001415 usec\nrounds: 22936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3920418.3841831116,
            "unit": "iter/sec",
            "range": "stddev: 2.908198511465208e-7",
            "extra": "mean: 255.07481651316434 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.3769323188991793,
            "unit": "iter/sec",
            "range": "stddev: 0.012121744709340552",
            "extra": "mean: 726.2521085999879 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2526.451494789262,
            "unit": "iter/sec",
            "range": "stddev: 0.00013959038324014208",
            "extra": "mean: 395.8120716200065 usec\nrounds: 1480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 750.1467459504792,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546924507675698",
            "extra": "mean: 1.3330725026780492 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 93.08660656441148,
            "unit": "iter/sec",
            "range": "stddev: 0.0010731806280978374",
            "extra": "mean: 10.742684011239014 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 307.59157910490075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006721436269270802",
            "extra": "mean: 3.251064294120227 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2791.8684978757037,
            "unit": "iter/sec",
            "range": "stddev: 0.00019464616295534413",
            "extra": "mean: 358.18305939584434 usec\nrounds: 1751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.179312719273426,
            "unit": "iter/sec",
            "range": "stddev: 0.0011933299589747788",
            "extra": "mean: 35.48702588889059 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4547.723292612271,
            "unit": "iter/sec",
            "range": "stddev: 0.000040211276553743425",
            "extra": "mean: 219.8902474177551 usec\nrounds: 2615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 87.05045910915385,
            "unit": "iter/sec",
            "range": "stddev: 0.0013791624949148786",
            "extra": "mean: 11.487590188882123 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 51.219878987773875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006038641633561275",
            "extra": "mean: 19.523669711103746 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 69.01633322517733,
            "unit": "iter/sec",
            "range": "stddev: 0.0012907268021122985",
            "extra": "mean: 14.489323805965363 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 48.5076561584599,
            "unit": "iter/sec",
            "range": "stddev: 0.0010631562807511164",
            "extra": "mean: 20.615302391302958 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1323760.435642414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037362864414938176",
            "extra": "mean: 755.4236953113841 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 53.99492491608296,
            "unit": "iter/sec",
            "range": "stddev: 0.0013036404527967727",
            "extra": "mean: 18.520259108687817 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 56.683286408711446,
            "unit": "iter/sec",
            "range": "stddev: 0.0016160156953478882",
            "extra": "mean: 17.641884642847977 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 435.22723368069813,
            "unit": "iter/sec",
            "range": "stddev: 0.00043963631360289054",
            "extra": "mean: 2.2976503366828465 msec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 190.11173754005875,
            "unit": "iter/sec",
            "range": "stddev: 0.00040337792785056923",
            "extra": "mean: 5.260064491227368 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4467775.397909982,
            "unit": "iter/sec",
            "range": "stddev: 4.3772940833778076e-7",
            "extra": "mean: 223.82503840005623 nsec\nrounds: 30212"
          }
        ]
      }
    ]
  }
}